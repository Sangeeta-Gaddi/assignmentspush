const Listing = require("./models/listings.js");

// let isLoggedIn=(req,res,next)=>{
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash("error","You must be signed in to do that!");
//     res.redirect("/login");

// };

//do some changes, if u want to redirect to the same page, from where u r logging in
let isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        //save the current page info in session memory
        req.session.requrl=req.originalUrl;
        req.flash("error","You must be signed in to do that!");
        return res.redirect("/login");
    }
    next();
};

//saveRedirect middleware
let saveRedirect=(req,res,next)=>{
    if(req.session.requrl)
    {
        res.locals.redirectUrl=req.session.requrl;
    }
    next();
}

let isOwner=async(req,res,next)=>{
    //get listing id
    const{id}=req.params;
    const listing=await Listing.findById(id).populate("owner");
    //compare currentuser nad listing owner are same, then allow them delet or editor post
    //equals method(compares the values)
    if(!listing.owner._id.equals(req.user._id)){
        //if both are not equal, flash the message(nit allowed) and redirect to same page
        req.flash("error","You are not the owner, not allowed to perform the actions on listing");
        return res.redirect(`/listings/${id}`)
    }
    next();
}


//middleware to secure delete of review
let isAuthor=async(req,res,next)=>{
    //get liating nad review id from path parameters
    const {id,reviewId}=req.params;
    //i will find listing with review details
    const listing=await Listing.findById(id).populate("reviews");
    const review=listing.reviews.find(r=>r._id.equals(reviewId));
    //compare current user and logged in uer, if both are equals then only allow to delete review, else goto next()
    if(!review.author.equals(req.user._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}`)
    }
    next();
}
module.exports={
    isLoggedIn,
    isOwner,
    isAuthor,
    saveRedirect,
};