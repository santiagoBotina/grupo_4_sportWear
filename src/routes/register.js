const express = require("express");
const registerController = require("../controllers/controllerRegister.js");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body, check } = require("express-validator");

//**Configuración de Multer */

let multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    let folder = path.join(__dirname + "../../../public/images/profileImages");
    callback(null, folder);
  },
  filename: (req, file, callback) => {
    let imageName = Date.now() + path.extname(file.originalname);
    callback(null, imageName);
  },
});

const fileUpload = multer({ storage: multerDiskStorage });

//**Validaciones */

let registerValidator = [
  body("nombre").notEmpty().withMessage("Debes llenar el campo de 'nombre'"),
  body("apellido")
    .notEmpty()
    .withMessage("Debes llenar el campo de 'apellido'"),
  body("email").notEmpty().withMessage("Debes usar un email válido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Debes crear una contraseña con mínimo 6 caractéres"),
];

//**Rutas */
router.get("/", registerController.registerView);
router.post(
  "/",
  fileUpload.single("profileImage"),
  registerValidator,
  registerController.registerProcess
);

module.exports = router;
