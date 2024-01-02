const express= require('express');
const {createorg, getorg, getorgbyid, updateorgbyid, deleteorgbyid, blockorgbyid, getorgbyadminid } = require('../controller/org');
const  router = express.Router();

router.post("/createorg",createorg);
router.get("/getorg",getorg);

router.get("/getorgbyadminid/:aId",getorgbyadminid);

router.get("/getorgbyid/:id",getorgbyid);
router.put("/updateorgbyid/:id",updateorgbyid);
router.put("/deleteorgbyid/:id",deleteorgbyid);
router.put("/blockorgbyid/:id",blockorgbyid);





module.exports = router