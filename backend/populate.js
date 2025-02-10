const mongoose = require("mongoose");
const Listing = require("./models/Listing");
require("dotenv").config();

const listings = [
   
  
    // Añade más alojamientos aquí
  ];
  

mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Conectado a MongoDB");
        await Listing.insertMany(listings);
        console.log("Alojamientos añadidos");
        mongoose.disconnect();
    })
    .catch((err) => console.error("Error al conectar con MongoDB", err));
