
const express=require("express");
// const router=express.Router()
const router = express.Router({ mergeParams: true });
//important u need to import this model
const Listing = require("../models/listings.js");
//import review model which is inside models
const Review=require("../models/review.js")
//import the joi schema(listingSchema)
const {listingSchema,reviewSchema}=require("../schema.js")
//import customError
const CustomError=require("../error.js")
//importr if asyncwrapper if requires
const asyncWrapper=require("../utils.js");
//import the middlewaers and add in whichever route are needed
const {isLoggedIn,isOwner,isAuthor}=require("../middleware.js");

//validate function for reviewSchema(use in whichever route u want)
const validateReview=(req,res,next)=>{
    const{error}=reviewSchema.validate(req.body);
    if(error){
        const msg=error.details.map(el=>el.message).join(",");
        throw new CustomError(msg,404);
    }else{
    next();
}
}


router.get("/", isLoggedIn,validateReview, asyncWrapper(async(req,res)=>{
    res.redirect(`/listings/${req.params.id}`)
}));

// route to handle reviews(posting/submitting review)
router.post("/",isLoggedIn,validateReview, asyncWrapper(async(req,res)=>{
    const newreview=new Review(req.body.review);
    //add the review owner(not default one:Jhon)
    newreview.author=req.user._id;
    const listing=await Listing.findById(req.params.id);
    if(!listing){
        throw new CustomError("No listing with this id",400);
    }
    listing.reviews.push(newreview);
    await listing.save();
    await newreview.save();
    req.flash("success","Review added successfully")
    res.redirect(`/listings/${req.params.id}`)
}));



//define route for deleting review
router.delete("/:reviewId",isLoggedIn,isAuthor,async(req,res)=>{
    const{id,reviewId}=req.params;

    //delete rview and take care of listing whiich is related to it 
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
     req.flash("success","Review deleted successfully")
    res.redirect(`/listings/${id}`);
});



//export router
module.exports=router;