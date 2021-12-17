const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const formProductController = {
  index: function (req, res) {
    res.render("our_Products", { products });
  },

  detalleProducto: (req, res) => {
    let productId = req.params.id - 1;
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
    let productId = req.params.id - 1;
    res.render("editProduct", { products, productId });
  },

  editarProducto: (req, res) => {
    let productId = req.params.id;
    // let productToEdit = products[productId];
    let productToEdit = products.find((product) => product.id == productId);

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
    };

    let newProducts = products.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts));
    res.redirect("/");
  },

  borrar: (req, res) => {
    let id = req.params.id;
    let finalProducts = products.filter((product) => product.id != id);
    fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts));
    res.redirect("/");
  },
};

module.exports = formProductController;
