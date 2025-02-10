const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    category: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    host: { type: String, required: true },
    recomendation: { type: String },
});

module.exports = mongoose.model("Listing", ListingSchema);
