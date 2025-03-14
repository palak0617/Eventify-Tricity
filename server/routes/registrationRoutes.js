const express = require("express");
const { body, validationResult } = require("express-validator");
const protect = require("../middleware/authMiddleware");
const Registration = require("../models/Registration");
const QRCode = require("qrcode");

const router = express.Router();

router.post("/", protect, async (req, res) => {
    const { event, name, email, phone } = req.body;
    const userId = req.user.id;

    try {
        const existingRegistration = await Registration.findOne({ user: userId, event });
        if (existingRegistration) {
            return res.status(400).json({ message: "User already registered for this event" });
        }

        const registration = new Registration({ user: userId, event, name, email, phone });
        await registration.save();

        const qrData = JSON.stringify({ registrationId: registration._id, name, event });
        const qrCodeUrl = await QRCode.toDataURL(qrData);

        res.status(201).json({ message: "Registration successful", registration, qrCodeUrl });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


router.get("/:eventId", protect, async (req, res) => {
  try {
    const registrations = await Registration.find({ event: req.params.eventId }).populate("user", "name email phone");
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    if (registration.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized to cancel this registration" });
    }

    await registration.deleteOne();
    res.json({ message: "Registration cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
