const express = require("express");
const {
  createcustomer,
  getcustomer,
  getcustomerbyid,
  updatecustomerbyid,
  deletecustomerbyid,
  blockcustomerbyid,
  converttosupplier,
} = require("../controller/customer");
const router = express.Router();

router.post("/createcustomer", createcustomer);
router.get("/getcustomer", getcustomer);
router.get("/getcustomerbyid/:id", getcustomerbyid);
router.put("/updatecustomerbyid/:id", updatecustomerbyid);
router.put("/blockcustomerbyid/:id", blockcustomerbyid);
router.put("/deletecustomerbyid/:id", deletecustomerbyid);
router.put("/converttosupplier/:id", converttosupplier);

module.exports = router;
