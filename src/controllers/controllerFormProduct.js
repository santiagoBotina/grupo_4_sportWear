const fs = require("fs");
const path = require("path");
const db = require("../database/models");

let products = db.Producto;
let tipoCalzado = db.TipoCalzado;

//usando JSON
// const productsFilePath = path.join(__dirname, "../database/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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
    tipoCalzado.findAll().then((tipoCalzado) => {
      return res.render("formProduct", { tipoCalzado: tipoCalzado });
    });
  },
  procesaFormulario: (req, res) => {
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

    //usando JSON
    // products.push(newProduct);
    // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    // res.redirect("/");
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
      .then(res.redirect("/products/detail/" + req.params.id));

    //usando JSON
    // let productId = req.params.id;
    // // let productToEdit = products[productId];
    // let productToEdit = products.find((product) => product.id == productId);

    // productToEdit = {
    //   id: productToEdit.id,
    //   name: req.body.name,
    //   precio: req.body.precio,
    //   description: req.body.description,
    //   category: req.body.categoria,
    //   talla: req.body.talla,
    //   image: req.file.filename,
    // };

    // let newProducts = products.map((product) => {
    //   if (product.id == productToEdit.id) {
    //     return (product = { ...productToEdit });
    //   }
    //   return product;
    // });

    // fs.writeFileSync(productsFilePath, JSON.stringify(newProducts));
    // res.redirect("/");
  },

  borrar: (req, res) => {
    let id = req.params.id;
    let finalProducts = products.filter((product) => product.id != id);
    fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts));
    res.redirect("/");
  },
};

module.exports = formProductController;
