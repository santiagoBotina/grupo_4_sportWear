const path = require("path");
const fs = require("fs");

const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const recordame = (req, res, next) => {
  if (
    req.cookies.recordar != undefined &&
    req.session.usuarioLogged == undefined
  ) {
    let usuarioLogged;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == req.cookies.recordar) {
        usuarioLogged = users[i];
        break;
      }
    }
    req.session.usuarioLogged = usuarioLogged;
  }

  next();
};

module.exports = recordame;
