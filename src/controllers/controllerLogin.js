const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const loginController = {
  loginRoute: function (req, res) {
    res.render("login");
  },
  loginProcess: (req, res) => {
    let errores = validationResult(req);

    if (errores.isEmpty()) {
      let usuarioLogged;

      for (let i = 0; i < users.length; i++) {
        if (
          req.body.email == users[i].email &&
          bcrypt.compareSync(req.body.password, users[i].password)
        ) {
          usuarioLogged = users[i];
        }
      }
      req.session.usuarioLogged = usuarioLogged;

      if (usuarioLogged == undefined) {
        return res.render("login", {
          errors: {
            password: {
              msg: "Las credenciales son inválidas",
            },
          },
        });
      }

      res.send("Hola " + usuarioLogged.name);

      if (req.body.recordame != undefined) {
        res.cookie("recordar", usuarioLogged.email, { maxAge: 120000 });
      }

      // res.send("Hola " + req.session.usuarioLogged.name);
    } else {
      return res.render("login", { errors: errores.mapped() });
    }
  },
};

module.exports = loginController;
