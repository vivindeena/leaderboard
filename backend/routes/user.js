const router = require("express").Router();
const userController = require("../controllers/UserController");

router.post("/getProfile", async (req, res)=>{
    try {
        await userController.getProfile(req, res);
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).json({
            message: 'Database Connection Error',
            error: err,
        });
    }
});
router.post("/updateProfile", userController.updateProfile);
router.get("/getBoard", userController.getProfile);

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "You are in user endpoint",
    });
});

module.exports = router;