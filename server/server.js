require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

const app = express();

connectDB();

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/registrations", registrationRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

const eventRoutes = require("./routes/eventRoutes");

app.use("/api/events", eventRoutes);

