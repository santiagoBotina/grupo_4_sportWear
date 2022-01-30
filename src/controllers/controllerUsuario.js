let db = require("../database/models");

let usuariosController = {
  mostrar: (req, res) => {
    db.Usuarios.findAll().then((usuarios) => {
      res.render("usuario", { usuario: usuarios });
    });
  },
};

module.exports = usuariosController;
