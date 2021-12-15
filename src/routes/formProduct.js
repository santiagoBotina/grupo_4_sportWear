const express = require("express");
const controllerFormProduct = require("../controllers/controllerFormProduct");
const router = express.Router();

router.get("/crear", controllerFormProduct.crear);
router.post("/crear", controllerFormProduct.procesaFormulario);
//router.post("/", detalleProductoController.procesaFormulario);

router.get("/editar/:idProduct", controllerFormProduct.editar);
router.put("/editar", controllerFormProduct.desplazar)

module.exports = router;
