import app from "../server/server.js";

app.get("/api", (req, res) => {
    res.json({
        message: "NorthPeak Roofing API is running!",
    });
});

export default app;