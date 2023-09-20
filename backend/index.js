require("dotenv").config();
const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Middleware function for file upload
const storage = require("./middlewares/file_upload");
const upload = multer({ storage: storage });

//Middle function to verify token
const verifyToken = require("./middlewares/jwt");


const api = require("./routes/api");
api.use("/api",api);


app.get("/user/login", (req, res) => {
    const {user, password} = req.body;
    let a = "a"
    if(!user || !password){
        res.status(200).json({
            errorMessage: "Missing Params"
        });
    }
     bcrypt.compare(password, process.env.ADMIN_PASSWRD)
        .then((result) => {
            if(result && process.env.ADMIN_USER === user){
                jwt.sign(
                    { is_admin: true },
                    process.env.SECRET_KEY,
                    (err, token) => {
                        if (err) {
                            console.log(err);
                        } else {
                            return res.status(200).json({
                                token,
                            });
                        }
                    }
                );
            }
        }).catch((err) => {
            console.log(err);
        })
});

app.get("/admin/upload-file", verifyToken, upload.single("upload"), (req, res) => {
    
});



app.listen(process.env.PORT || 3000, () =>
    console.log(`Example app listening on port https://localhost:${port}!`)
);
