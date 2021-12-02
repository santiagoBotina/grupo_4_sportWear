const express = require("express");
const controllerFormProduct = require("../controllers/controllerFormProduct");
const router = express.Router();

router.get("/", controllerFormProduct.index);
router.get("/editar", controllerFormProduct.editar);

module.exports = router;
