import express from "express";

const app = express();

const PORT = 5000;

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "NorthPeak Roofing backend is working!",
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});