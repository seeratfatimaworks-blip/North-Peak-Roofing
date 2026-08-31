const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    console.log(req.body);

    res.status(201).json({
        message: "Lead received successfully!",
        lead: req.body
    });
});

module.exports = router;