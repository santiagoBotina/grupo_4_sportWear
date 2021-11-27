const express = require("express");
const registerController = require("../controllers/controllerRegister.js");

const router = express.Router();

router.get("/", registerController.registerRoute)

module.exports=router