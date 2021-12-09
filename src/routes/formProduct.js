const express = require("express");
const controllerFormProduct = require("../controllers/controllerFormProduct");
const router = express.Router();

router.get("/crear", controllerFormProduct.crear);
router.post("/", controllerFormProduct.procesaFormulario);
//router.post("/", detalleProductoController.procesaFormulario);

router.get("/editar", controllerFormProduct.editar);

module.exports = router;
