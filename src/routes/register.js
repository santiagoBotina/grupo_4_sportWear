const express = require("express");
const registerController = require("../controllers/controllerRegister.js");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body, check } = require("express-validator");
const isLoggedMiddleware = require("../middlewares/loggedMiddleware");

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

const fileUpload = multer({
  storage: multerDiskStorage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback();
    }
  },
});

//**Validaciones */

let registerValidator = [
  body("nombre")
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage("Debes llenar el campo de 'nombre'"),
  body("apellido")
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage("Debes llenar el campo de 'apellido'"),
  body("email").notEmpty().isEmail().withMessage("Debes usar un email válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Debes crear una contraseña con mínimo 6 caractéres"),
];

//**Rutas */
router.get("/", isLoggedMiddleware, registerController.registerView);
router.post(
  "/",
  fileUpload.single("profileImage"),
  registerValidator,
  registerController.registerProcess
);

module.exports = router;
