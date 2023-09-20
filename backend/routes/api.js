const router = require("express").Router();
const adminController = require("../controllers/AdminController");
const userController = require("../controllers/UserController");

router.route("/admin/login").post(userController.createAccount);
router.route("/admin/file-upload").post(userController.createAccount);
router.route("/admin/file-upload").post(userController.createAccount);

router.route("/user/getBoards").post(invoiceController.createInvoice);


module.exports = router;
