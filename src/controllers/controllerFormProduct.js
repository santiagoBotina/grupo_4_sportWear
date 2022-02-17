const db = require("../database/models");

let products = db.Producto;
let tipoCalzado = db.TipoCalzado;

const formProductController = {
  index: function (req, res) {
    products.findAll().then((products) => {
      res.render("our_Products", { products });
    });
  },

  detalleProducto: (req, res) => {
    products.findByPk(req.params.id).then((products) => {
      res.render("detalle_del_producto", { products });
    });
  },

  crearProducto: (req, res) => {
    let userLogged = req.session.usuarioLogged;

    if (userLogged.tipo_usuario == 1 && userLogged) {
      tipoCalzado.findAll().then((tipoCalzado) => {
        return res.render("formProduct", { tipoCalzado: tipoCalzado });
      });
    } else {
      res.render("noAdmin");
    }
  },
  procesaCrearFormulario: (req, res) => {
    products
      .create({
        nombre: req.body.name,
        descripcion: req.body.description,
        color: req.body.color,
        precio: req.body.precio,
        image: req.file.filename,
        tipo_calzado_id: req.body.calzado,
        marca_id: req.body.marca,
      })
      .then(() => {
        res.redirect("/products");
      });
  },

  editar: (req, res) => {
    products.findByPk(req.params.id).then((products) => {
      tipoCalzado.findAll().then((tipoCalzado) => {
        res.render("editProduct", { products, tipoCalzado });
      });
    });
  },

  editarProducto: (req, res) => {
    products
      .update(
        {
          nombre: req.body.name,
          descripcion: req.body.description,
          color: req.body.color,
          precio: req.body.precio,
          image: req.file.filename,
          tipo_calzado_id: req.body.calzado,
          marca_id: req.body.marca,
        },
        {
          where: { idproducto: req.params.id },
        }
      )
      .then(res.redirect("/products/"));
  },

  borrar: (req, res) => {
    products
      .destroy({
        where: {
          idproducto: req.params.id,
        },
      })
      .then(res.redirect("/products"));
  },
};

module.exports = formProductController;
