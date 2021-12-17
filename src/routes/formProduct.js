const express = require("express");
const controllerFormProduct = require("../controllers/controllerFormProduct");
const router = express.Router();

router.get("/", controllerFormProduct.index);
router.get("/:id", controllerFormProduct.detalleProducto);
router.get("/crear", controllerFormProduct.crear);
router.post("/crear", controllerFormProduct.procesaFormulario);
//router.post("/", detalleProductoController.procesaFormulario);

router.get("/editar/:id", controllerFormProduct.editar);
router.put("/editar/:id", controllerFormProduct.editarProducto);
router.delete("/borrar/:id", controllerFormProduct.borrar);

module.exports = router;
