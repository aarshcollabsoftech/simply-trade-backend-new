const express = require("express");
const {
  createItem,
  getItem,
  getItemsById,
  updateItemsById,
  deleteItemsById,
  blockItemsById,
} = require("../controller/itemmaster");
const router = express.Router();

router.post("/createitem", createItem);
router.get("/getitem", getItem);
router.get("/getitembyid/:id", getItemsById);
router.put("/updateitembyid/:id", updateItemsById);
router.put("/deleteitembyid/:id", deleteItemsById);
router.put("/blockitembyid/:id", blockItemsById);

module.exports = router;
