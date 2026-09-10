import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "NorthPeak Roofing API is running!",
    });
});

app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app;