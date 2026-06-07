const express=require("express")
//const variables
const app=express();
const port=3000;
const path = require("path");
const methodOverride = require('method-override');
const mongoose = require("mongoose");
//important u need to import the 
const Listing = require("./models/listings.js");

//setting up app variables and middleware
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method'));

//connection to database
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnbclone");
}

main().then(()=>{
    console.log("Connection to DB successful")
}).catch(err=>console.log(err));

//testing route
app.get("/",(req,res)=>{
    res.send("Hello World")
})

//index route
app.get("/listings",async(req,res)=>{
    try{
        const listings=await Listing.find();
        //console.log(listings);
        res.render("index.ejs",{listings});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});


//New listing route
app.get("/listings/new",async(req,res)=>{
    try{
        //res.send("Form loaded");
        res.render("new.ejs");
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});

// //show listing
app.get("/listings/:id",async(req,res)=>{
    try{
        console.log("I am showing particular listing which is selected")
        const id=req.params.id;
        const listing=await Listing.findById(id);
        res.render("show.ejs",{listing});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})

// //posting new listing 
app.post("/listings/new",async(req,res)=>{
    try{
        let data=req.body;
        const newListing=new Listing(data);
        await newListing.save();
        res.send("Saved new listing")
        //u can rendirect to listing page(u can see the new added listing)
        //res.redirect("listings");
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})


//listen to port
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
});
