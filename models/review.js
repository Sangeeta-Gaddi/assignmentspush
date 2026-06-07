//import mongoose
const mongoose=require("mongoose");
//import userschema
const User=require('./user.js')

//define schema
const reviewSchema=new mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comment:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
});

//create instance
const Review=mongoose.model("Review",reviewSchema);

//export it
module.exports=Review;