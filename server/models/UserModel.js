const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bookings: [bookingSchema], // Array of booked properties
});

module.exports = mongoose.model("User", userSchema);
