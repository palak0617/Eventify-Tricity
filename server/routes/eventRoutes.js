const express = require("express");
const { body, validationResult } = require("express-validator");
const protect = require("../middleware/authMiddleware");
const Event = require("../models/event");

const router = express.Router();

// ✅ Fetch All Events
router.get("/", async (req, res) => {
    try {
        const events = await Event.find().populate("organizer", "name email");
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Fetch Single Event
router.get("/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate("organizer", "name email");
        if (!event) return res.status(404).json({ message: "Event not found" });

        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Create an Event (Only Logged-In Users)
router.post(
    "/",
    protect,
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("description").notEmpty().withMessage("Description is required"),
        body("date").isISO8601().withMessage("Valid date is required"),
        body("location").notEmpty().withMessage("Location is required"),
        body("category").isIn(["Technical", "Cultural", "Sports", "Other"]).withMessage("Invalid category")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { title, description, date, location, category } = req.body;
            const newEvent = new Event({
                title,
                description,
                date,
                location,
                category,
                organizer: req.user.id
            });

            await newEvent.save();
            res.status(201).json({ message: "Event created successfully", event: newEvent });
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }
);

// ✅ Update an Event (Only the Organizer or Admin)
router.put("/:id", protect, async (req, res) => {
    try {
        let event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        // Ensure only the organizer or admin can edit
        if (event.organizer.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized to edit this event" });
        }

        event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: "Event updated successfully", event });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ Delete an Event (Only the Organizer or Admin)
router.delete("/:id", protect, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Event not found" });

        // Ensure only the organizer or admin can delete
        if (event.organizer.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ message: "Not authorized to delete this event" });
        }

        await event.deleteOne();
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
