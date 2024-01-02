const express = require("express");
const {
  addpaymentAccount,
  getpaymentAccount,
  getpaymentAccountById,
  updatepaymentAccountById,
  deletepaymentAccountById,
} = require("../controller/paymentaccountmaster");

const router = express.Router();

router.post("/addpaymentAccount", addpaymentAccount);
router.get("/getpaymentAccount", getpaymentAccount);
router.get("/getpaymentAccountById/:id", getpaymentAccountById);
router.put("/updatepaymentAccountById/:id", updatepaymentAccountById);
router.put("/deletepaymentAccountById/:id", deletepaymentAccountById);

module.exports = router;
