require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

//Middlewares
// const corsOptions = {
//     origin: "http://localhost:3000",
//     methods: "GET,POST",
//     credentials: true,
// }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({
        data: "Namaste!",
    });
});

const admin = require("./routes/admin")
app.use("/admin",admin);
const user = require("./routes/user")
app.use("/user", user);


app.get("/", (req, res) => {
    res.sendFile("/public/index.html");
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});
