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
        if (req.body.email == users[i].email) {
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            usuarioLogged = users[i];
          }
        }
        req.session.usuarioLogged = usuarioLogged;
      }

      res.redirect("/");
    } else {
      return res.render("login", { errors: errores.array() });
    }
  },
};

module.exports = loginController;
