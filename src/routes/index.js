const express = require("express");
const indexController = require("../controllers/controllerIndex.js");

const router = express.Router();

router.get("/", indexController.index)



module.exports=router