const express=require("express");
const router=express.Router();
const User=require("../models/user");
const {asyncWrapper}=require("../utils.js");
const user=require("../models/user");
const passport=require("passport");
const {saveRedirect}=require("../middleware.js")


//serve the signup page for registering the user
router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

router.post("/signup",async(req,res)=>{
    const {username,email,password}=req.body;
    const userdoc=new User({username,email});
    const registeredUser=await User.register(userdoc,password);
    //res.send(registeredUser);
    //once user isregistere redirect him to listing page
    //res.redirect("/listings");

    //once u signup ,it should automatically login als(passport supports this)
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Airbnb!");
        res.redirect("/listings");
    });
});

router.get("/login",(req,res)=>{
    res.render("users/login.ejs");
});

//once he login he wil be posting the data(submit)
router.post("/login",saveRedirect,passport.authenticate("local",{
    failureFlash:true,
    failureRedirect:"/login"
}),
    async(req,res)=>{
    req.flash("success","Welcome back");
    const link=res.locals.redirectUrl || "/listings";
    res.redirect(link);
});

//once user logout what needs to happen(as of now use, get(actually u should use post/delete))
router.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You have logged out successfully!")
        res.redirect("/listings")
    })
});

module.exports=router;