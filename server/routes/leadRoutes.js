const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Lead received successfully!",
        lead: req.body
    });
});

module.exports = router;