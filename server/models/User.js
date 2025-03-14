const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "organizer", "admin"], default: "student" },
    phone: { type: String, required: true },
    profilePic: { type: String, default: "default.jpg" }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
