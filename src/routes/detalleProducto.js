const express = require("express");
const detalleProductoController = require("../controllers/controllerIndex.js");

const router = express.Router();

router.get("/", detalleProductoController.detalleProducto)


module.exports=router

