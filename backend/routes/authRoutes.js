const express = require("express");
const router = express.Router();
const { registerUser, loginUser }=require("../controllers/authController");
console.log(typeof registerUser);
console.log(typeof loginUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;