const express = require("express");
const controllerFormProduct = require("../controllers/controllerFormProduct");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//**Configuración de Multer */

let multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    let folder = path.join(__dirname + "/../../public/images/our_products");
    callback(null, folder);
    console.log(folder);
  },
  filename: (req, file, callback) => {
    let imageName = Date.now() + path.extname(file.originalname);
    callback(null, imageName);
  },
});

const fileUpload = multer({ storage: multerDiskStorage });

router.get("/", controllerFormProduct.index);
router.get("/detail/:id", controllerFormProduct.detalleProducto);
router.get("/crear", controllerFormProduct.crearProducto);
router.post(
  "/crear",
  fileUpload.single("productImage"),
  controllerFormProduct.procesaFormulario
);
//router.post("/", detalleProductoController.procesaFormulario);

router.get("/editar/:id", controllerFormProduct.editar);
router.put("/editar/:id", controllerFormProduct.editarProducto);
router.delete("/borrar/:id", controllerFormProduct.borrar);

module.exports = router;
