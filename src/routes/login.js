const express = require("express");
const loginController = require("../controllers/controllerLogin.js");

const router = express.Router();

router.get("/", loginController.loginRoute)

module.exports=router