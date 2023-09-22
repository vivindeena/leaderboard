const router = require("express").Router();
const adminController = require("../controllers/AdminController");
const multer = require("multer");

//Middleware function for file upload
const upload = require("../middlewares/file_upload");

//Middle function to verify token
const verifyToken = require("../middlewares/jwt");

router.post("/login",adminController.login);
router.post("/file_upload", verifyToken, upload.single("upload"), async (req, res) => {
    try {
        await adminController.fileUpload(req,res);
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({
            message: "Database Connection Error",
            error: err,
        });
    }
});
router.post("/put_score", verifyToken, async (req, res) => {
    try {
        await adminController.putScore(req,res);
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({
            message: "Database Connection Error",
            error: err,
        });
    }
});

router.get("/init_boards", verifyToken, async (req, res) => {
    try {
        await adminController.initBoards(req,res);
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({
            message: "Database Connection Error",
            error: err,
        });
    }
});

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "You are in admin endpoint",
    });
});

module.exports = router;
