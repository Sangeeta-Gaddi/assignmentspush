//get all the routes w.r.t listings here

//
const express=require("express");
const router=express.Router()
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
//import the middleware and put  it in whereever route u want(loggedIn and isowner)
const {isLoggedIn,isOwner}=require("../middleware.js");

//controllers
const listingController=require("../controllers/listing.js")

//define the validate function(for Joi Listing schema)
function validateListing(req,res,next){
    let{error}=listingSchema.validate(req.body);
    if(error){
        let msg=error.details.map(el=>el.message).join(",");
        throw new CustomError(msg,404);
    }
    next();
}



//instead of connecting to app instance, conncet the route handlers to router instance(replace app with router for all routes)
//index route
router.get("/",listingController.index)

// //New listing route
// router.get("/new",isLoggedIn,listingController.rendernewform);
// // //posting new listing 
// router.post("/new",validateListing,isLoggedIn,listingController.createListing)

//the above two routes can vbe written using router.route function(becoz they have same/cpmmon path)
router.route("/new")
.get(isLoggedIn,listingController.rendernewform)
.post(validateListing,isLoggedIn,listingController.createListing)

// //show listing
router.get("/:id",listingController.showListing)


//to edit the listing
router.get("/:id/edit",isLoggedIn,isOwner,);



// // when  user edits listing ans submits, then it should come to this route
// router.put("/:id",validateListing,isLoggedIn,isOwner,listingController.rendereditform)
// //delete the listing u don't want
// router.delete("/:id", isLoggedIn,isOwner,listingController.destroyListing)

 router.route("/:id")
 .put(validateListing,isLoggedIn,isOwner,listingController.rendereditform)
 .delete(isLoggedIn,isOwner,listingController.destroyListing)



//export router
module.exports=router;



// async(req,res)=>{
//     const id=req.params.id;

//     await Listing.findByIdAndUpdate(id,{...req.body});
//     res.redirect('/listings');
// }