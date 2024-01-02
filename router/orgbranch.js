const express= require('express');
const { createorgbranch, getbranchbyorgid,  getorgbranch, getorgbranchbyid, updateorgbranchbyid, deleteorgbranchbyid, blockorgbranchbyid } = require('../controller/orgbranch');
const  router = express.Router();

router.post("/createorgbranch",createorgbranch);
router.get("/getorgbranch",getorgbranch);

router.get("/getbranchbyorgid/:oId",getbranchbyorgid);

router.get("/getorgbranchbyid/:id",getorgbranchbyid);
router.put("/updateorgbranchbyid/:id",updateorgbranchbyid);
router.put("/deleteorgbranchbyid/:id",deleteorgbranchbyid);
router.put("/blockorgbranchbyid/:id",blockorgbranchbyid);





module.exports = router
