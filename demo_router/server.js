const express=require("express");
const app=express();
const cookieParser=require('cookie-parser')
//import session
const session=require("express-session")




//add it as middleware  
// app.use(cookieParser("secretcode"));   remove secretcode as u have added session
app.use(cookieParser());


//configure session options and give it to session
const sessionOptions={
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24} //24 hours
}
//add session as middleware
// app.use(session())

//give the optios for session
app.use(session(sessionOptions));

//create some route
app.get("/about",(req,res)=>{
    console.log("Hi I am in /about route")
    //we want to save smthg w.rt session
    req.session.username=req.query.name;
    // res.cookie("name","opqtech",{signed:true});
    res.send("/about responded");
})

app.get("/watch",(req,res)=>{
    console.log("Hi I am /watch route");
    //to see normal cookies(can be read by all)
    // console.log(req.cookies)

    //to see signed cookies(encrypted cookies)
    // console.log(req.signedCookies)
    console.log(req.session.username);
    res.send("/watch responded")
})



app.listen(3001,()=>{
    console.log("Server is listening on port 3001")
})