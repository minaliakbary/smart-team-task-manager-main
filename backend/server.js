const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Smart Task Manager API is running!",
        status: "success"
    });
});

app.get("/tasks", (req, res) => {
    res.json([
        { id: 1, title: "Learn Docker", completed: false },
        { id: 2, title: "Build Smart Task Manager", completed: false }
    ]);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});