require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("/public/index.html");
});

app.get("/suprise", (req, res) => {
    res.sendFile('docking_leaderboard.html', {root: 'public'});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started on port", process.env.PORT || 3000);
});