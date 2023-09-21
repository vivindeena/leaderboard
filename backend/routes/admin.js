const router = require("express").Router();
const adminController = require("../controllers/AdminController");
const multer = require("multer");

//Middleware function for file upload
const upload = require("../middlewares/file_upload");

//Middle function to verify token
const verifyToken = require("../middlewares/jwt");

router.post("/login",adminController.login);
router.post("/file_upload",verifyToken, upload.single("upload"), adminController.fileUpload);
router.post("/put_score", verifyToken, adminController.putScore);

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "You are in admin endpoint",
    });
});

module.exports = router;
