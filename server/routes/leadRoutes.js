const express = require("express");
const Lead = require("../models/Lead");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, phone, address, service, message } = req.body;

        // Validation
        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        // Save lead to MongoDB
        const newLead = await Lead.create({
            name,
            email,
            phone,
            address,
            service,
            message
        });

        console.log("New lead saved:", newLead);

        res.status(201).json({
            message: "Lead received successfully!",
            lead: newLead
        });

    } catch (error) {
        console.error("Error saving lead:", error);

        res.status(500).json({
            message: "Something went wrong."
        });
    }
});

router.get("/", protect, async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });

        res.status(200).json(leads);
    } catch (error) {
        console.error("Error fetching leads:", error);

        res.status(500).json({
            message: "Something went wrong."
        });
    }
});

module.exports = router;