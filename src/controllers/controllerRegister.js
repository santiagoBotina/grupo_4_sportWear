const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const registerController = {
  registerView: (req, res) => {
    res.render("register");
  },
  registerProcess: (req, res) => {
    // ***validaciones del texto del form***
    let errores = validationResult(req);

    let profileImage = req.file;

    if (errores.isEmpty() && profileImage !== undefined) {
      let newUser = {
        name: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file.filename,
      };

      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

      res.redirect("/login");
    } else {
      return res.render("register", { errors: errores.array() });
    }
  },
};

module.exports = registerController;
