const express = require("express");
const {
  signup,
  login,
  forgotpassword,
  resetpassword,
  getuserbyToken,
} = require("../controller/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgotpassword", forgotpassword);
router.post("/resetpassword/:token", resetpassword);
router.post("/getUserbyToken/:token", getuserbyToken);


module.exports = router;
