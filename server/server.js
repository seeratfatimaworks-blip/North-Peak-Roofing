require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const connectDB = require("./config/db");

const leadRoutes = require("./routes/leadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 5000;

connectDB();


app.get("/", (req, res) => {
    res.json({
        message: "NorthPeak Roofing API is running!",
    });
});

app.use("/api/leads", leadRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});