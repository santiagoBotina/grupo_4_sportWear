let db = require("../database/models");



let usuariosController = {
  mostrar: (req, res) => {
    db.Usuario.findAll().then(usuarios => {
      res.render("usuario.ejs", {usuarios});
    });
  },
};

module.exports = usuariosController;
