require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const leadRoutes = require("./routes/leadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

connectDB();


app.get("/", (req, res) => {
    res.send("NorthPeak Roofing API is running!");
});

app.use("/api/leads", leadRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});