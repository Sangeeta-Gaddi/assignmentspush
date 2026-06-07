//import joi
const Joi=require("joi");

//define schema
const listingSchema=Joi.object({
    title:Joi.string().required(),
    description:Joi.string(),
    image:Joi.string().uri(),
    price:Joi.number(),
    location:Joi.string(),
    country:Joi.string()
});

//add review validation schema using joi
const reviewSchema=Joi.object({
    review:Joi.object({
        comment:Joi.string().allow("").required(),
        rating: Joi.number().min(1).max(5).required(),
    }).required(),
})

//export it
module.exports={
    listingSchema,
    reviewSchema
};