// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

// Book a property
router.post("/book", async (req, res) => {
  try {
    const { userId, propertyId, startDate, endDate } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.bookings.push({ propertyId, startDate, endDate });
    await user.save();

    res.status(201).json({ message: "Property booked successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Get user profile by ID
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("-password"); // Exclude password from response
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
