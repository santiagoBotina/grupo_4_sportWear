const isLogged = (req, res, next) => {
  if (req.session.usuarioLogged !== undefined) {
    res.send("Está página es solo para invitados");
  } else {
    next();
  }
};

module.exports = isLogged;
