const db = require("../../database/models");
let users = db.Usuario;

const apiControllerUsers = {
  show: (req, res) => {
    users
      .findAll({ attributes: ["idusuario", "nombre", "email"] })
      .then((users) => {
        users.map((user) => {
          user.setDataValue(
            "detail",
            "http://localhost:5000/usuario/" + user.idusuario
          );
        });

        let respuesta = {
          count: users.length,
          users: users,
        };

        res.json(respuesta);
      });
  },
};

module.exports = apiControllerUsers;
