require("dotenv").config();
const axios = require("axios");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("/public/index.html");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Started on port http://localhost:${process.env.PORT || 3000}`);
});