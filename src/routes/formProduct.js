const express = require("express");
const controllerFormProduct = require("../controllers/controllerFormProduct");
const router = express.Router();

router.get("/", controllerFormProduct.index);
router.get("/detail/:id", controllerFormProduct.detalleProducto);
router.get("/crear", controllerFormProduct.crearProducto);
router.post("/crear", controllerFormProduct.procesaFormulario);
//router.post("/", detalleProductoController.procesaFormulario);

router.get("/editar/:id", controllerFormProduct.editar);
router.put("/editar/:id", controllerFormProduct.editarProducto);
router.delete("/borrar/:id", controllerFormProduct.borrar);

module.exports = router;
