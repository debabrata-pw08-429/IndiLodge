// models/Property.js
const mongoose = require("mongoose");

const dateRangeSchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  occupancy: { type: Number, required: true },
  availableDates: [dateRangeSchema], // Array of available date ranges
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Property", propertySchema);
