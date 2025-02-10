const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");

// Obtener todos los alojamientos
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un nuevo alojamiento
router.post("/", async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
