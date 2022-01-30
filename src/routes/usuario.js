const express = require("express");
const detalleUsuarioController = require("../controllers/controllerUsuario.js");

const router = express.Router();

router.get("/", detalleUsuarioController.mostrar);

module.exports = router;