const router = require("express").Router();
const authController = require("./controller/auth-controller/auth-controller");

router.post("/api/sendOtp", authController.sendOtp);
router.post("/api/verifyOtp", authController.verifyOtp);

module.exports = router;
