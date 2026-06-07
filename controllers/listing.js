//importr if asyncwrapper if requires
const asyncWrapper=require("../utils.js");
const Listing=require("../models/listings.js");
//import review model which is inside models
const Review=require("../models/review.js");
//import controller
const CustomError=require("../error.js");

//1.index route
module.exports.index= async(req,res)=>{
    try{
        const listings=await Listing.find();
        //console.log(listings);
        //console.log(req.flash("success"));
        //res.locals.message=req.flash("success");
        res.render("listings/index.ejs",{listings});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
};


//2.give form for user, when they want to add new list(new listing route)
module.exports.rendernewform=async(req,res)=>{
    try{
        //res.send("Form loaded");
        res.render("listings/new.ejs");
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
}

//3. post new list
module.exports.createListing =async(req,res)=>{
    try{
        
        let data=req.body;
        const newListing=new Listing(data);
        newListing.owner=req.user._id;
        await newListing.save();
        //res.send("Saved new listing")
        //u can rendirect to listing page(u can see the new added listing)

        //add message using flash
        req.flash("success","Successfully new listing is added")
        res.redirect("/listings");
        //getting so commented
    }
    catch(err){
        req.flash("error","Error in adding new listing")
        res.status(500).json({error:"Internal Server Error"});
    }
}

//4.show listing
module.exports.showListing=async(req,res)=>{
    try{
        console.log("I am showing particular listing which is selected")
        const id=req.params.id;
        //populate reviews,owner of the listing and populate the author(of the reviews)
        const listing=await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
        res.render("listings/show.ejs",{listing});
    }
    catch(err){
        console.log(err);
        //res.status(500).json({error:"Internal Server Error"})
        next(new CustomError("listing not found",404));
    }
}

//5.edit listing(here u are giing form(rendering the form) to edit )
module.exports.rendereditform=async(req,res)=>{
    const id=req.params.id;
    const listing=await Listing.findById(id);

    res.render("listings/edit.ejs",{listing});
}

//6.delete listing(use destroy)
module.exports.destroyListing=async(req,res)=>{
    const id=req.params.id;
    await Listing.findByIdAndDelete(id);
    //add flash message odf deleting listing
    req.flash("success","Listing deleted successfully")
    res.redirect("/listings")
}

