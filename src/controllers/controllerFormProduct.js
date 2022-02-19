const { validationResult } = require("express-validator");
const db = require("../database/models");

let products = db.Producto;
let tipoCalzado = db.TipoCalzado;

let tiposCalzado = tipoCalzado.findAll();

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

    if (userLogged && userLogged.tipo_usuario == 1) {
      tiposCalzado.then((tipoCalzado) => {
        return res.render("formProduct", { tipoCalzado: tipoCalzado });
      });
    } else if (userLogged == undefined) {
      res.render("noAdmin");
    } else {
      res.render("noAdmin");
    }
  },
  procesaCrearFormulario: (req, res) => {
    let errores = validationResult(req);
    let productImage = req.file;

    const multerCheck = (file) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/gif"
      ) {
        return true;
      }
      return false;
    };

    if (
      errores.isEmpty() &&
      productImage !== undefined &&
      multerCheck(productImage)
    ) {
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
    } else {
      tipoCalzado.findAll().then((tipoCalzado) => {
        res.render("formProduct", {
          tipoCalzado: tipoCalzado,
          errors: {
            productImage: {
              msg: "Debes incluir una imágen y solo extensiones .png, .jpg .jpeg y .gif son válidas",
            },
            ...errores.mapped(),
          },
        });
      });
    }
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
