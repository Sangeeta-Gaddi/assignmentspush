//import mongoose
const mongoose = require("mongoose");

//design schema
const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    description: String,
    image: String,
    location: String,
    country: String
});

//once schema is ready, create a model nd insert simple data
const Listing = mongoose.model('listing', listingSchema);

//export the schema(make them available to import and use it in other files)
//imoprt it in init.js file
module.exports = Listing