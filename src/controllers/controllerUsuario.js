let db = require("../database/models");

let usuariosController = {
  list: (req, res) => {
    db.Usuarios.findAll().then((usuarios) => {
      res.render("usuario", { usuario: usuarios });
    });
  },
};

module.exports = usuariosController;