const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
        body("phone").isLength({ min: 10, max: 10 }).withMessage("Phone number must be 10 digits"),
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, phone, role, profilePic } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) return res.status(400).json({ message: "User already exists" });

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            user = new User({ name, email, password: hashedPassword, phone, role, profilePic });

            await user.save();

            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

            res.status(201).json({ token, user });
        } 
        catch (error) {
            res.status(500).json({ message: "Server error" });
        }
    }
);

router.post("/login", [
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").notEmpty().withMessage("Password is required"),
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: "Invalid credentials" });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

            res.json({ token, user });
        }
        catch (error) {
            res.status(500).json({ message: "Server error" });
        }
    }
);

router.get("/profile", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } 
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
