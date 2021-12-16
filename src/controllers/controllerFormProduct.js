const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const formProductController = {
  index: function (req, res) {
    res.render("our_Products", { products });
  },

  detalleProducto: (req, res) => {
    let productId = req.params.id;
    res.render("detalle_del_producto", { products, productId });
  },

  crear: (req, res) => {
    res.render("formProduct");
  },
  procesaFormulario: (req, res) => {
    let newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.precio,
      description: req.body.description,
      category: req.body.categoria,
      talla: req.body.talla,
      image: null,
    };

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect("/");
  },

  editar: (req, res) => {
    let productId = req.params.id;
    res.render("editProduct", { products, productId });
  },

  editarProducto: (req, res) => {
    let productId = req.params.id;

    let product = [
      { id: 1, name: "nike 1" },
      { id: 2, name: "nike 2" },
      { id: 3, name: "nike 3" },
      { id: 4, name: "nike 4" },
    ];

    let productToEdit = products[productId];

    res.render("editProduct", { productToEdit: productToEdit });
  },

  desplazar: (req, res) => {
    res.send("Cambio guardado");
  },
};

module.exports = formProductController;
