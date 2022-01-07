const express = require("express");
const loginController = require("../controllers/controllerLogin.js");
const router = express.Router();
const { body, check } = require("express-validator");

let loginValidator = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Debes llenar el campo de email"),
  body("password")
    .notEmpty()
    .withMessage("Debes llenar el campo de contraseña"),
];

router.get("/", loginController.loginRoute);
router.post("/", loginValidator, loginController.loginProcess);

module.exports = router;
