require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({
        data: "Namaste!",
    });
});

const admin = require("./routes/admin")
app.use("/admin",admin);
const user = require("./routes/user")
app.use("/user", user);


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});
