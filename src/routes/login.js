const express = require("express");
const loginController = require("../controllers/controllerLogin.js");
const router = express.Router();
const { body, check } = require("express-validator");
const isLoggedMiddleware = require("../middlewares/loggedMiddleware");

let loginValidator = [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Debes llenar el campo de email"),
  body("password")
    .notEmpty()
    .withMessage("Debes llenar el campo de contraseña"),
];

router.get("/", isLoggedMiddleware, loginController.loginRoute);
router.post("/", loginValidator, loginController.loginProcess);

module.exports = router;
