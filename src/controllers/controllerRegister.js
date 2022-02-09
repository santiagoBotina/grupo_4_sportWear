const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const usuarios = db.Usuario;

const registerController = {
  registerView: (req, res) => {
    res.render("register");
  },
  registerProcess: (req, res) => {
    let errores = validationResult(req);
    let profileImage = req.file;

    if (errores.isEmpty() && profileImage !== undefined) {
      usuarios
        .create({
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          profile_image: req.file.filename,
          tipo_usuario: req.body.tipoUsuario,
        })
        .then(res.redirect("/login"));
    }

    //**Falta afragar logica para confirmar que las contraseñas son iguales en el register**
    else {
      return res.render("register", { errors: errores.mapped() });
    }
  },
};

module.exports = registerController;
