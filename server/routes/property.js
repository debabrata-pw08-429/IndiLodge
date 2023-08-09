// routes/property.js
const express = require("express");
const router = express.Router();
const Property = require("../models/PropertyModel");

// Create a new property listing
router.post("/create", async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      price,
      bedrooms,
      occupancy,
      availableDates,
    } = req.body;
    const property = new Property({
      title,
      description,
      location,
      price,
      bedrooms,
      occupancy,
      availableDates,
    });
    await property.save();
    res.status(201).json({ message: "Property listing created successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Get all property listings
router.get("/listings", async (req, res) => {
  try {
    const { startDate, endDate, location, minBedrooms, maxOccupancy } =
      req.query;

    const filters = {};

    if (startDate && endDate) {
      filters.availableDates = {
        $elemMatch: {
          start: { $lte: new Date(startDate) },
          end: { $gte: new Date(endDate) },
        },
      };
    }

    if (location) {
      filters.location = location;
    }

    if (minBedrooms) {
      filters.bedrooms = { $gte: parseInt(minBedrooms) };
    }

    if (maxOccupancy) {
      filters.occupancy = { $lte: parseInt(maxOccupancy) };
    }

    const properties = await Property.find(filters);
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
