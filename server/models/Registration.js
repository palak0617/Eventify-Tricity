const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    registrationDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;
