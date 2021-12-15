const express = require("express");

const ourProductsController = require("../controllers/controllerOurProducts.js") 

const router = express.Router();


router.get("/ourProducts", ourProductsController.ourProductsController)

module.exports = router