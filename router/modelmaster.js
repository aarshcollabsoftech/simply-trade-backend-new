const express = require("express");
const { addModel, getModelById, updateModelById, deleteModelById, getModel } = require("../controller/modelmaster");

const router = express.Router();

router.post("/addModel", addModel);
router.get("/getModel", getModel);
router.get("/getModelById/:id", getModelById);
router.put("/updateModelById/:id", updateModelById);
router.put("/deleteModelById/:id", deleteModelById);

module.exports = router;
