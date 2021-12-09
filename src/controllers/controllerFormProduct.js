const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const formProductController = {
  crear: (req, res) => {
    res.render("formProduct");
  },
  procesaFormulario: (req, res) => {
    let newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      //talla: req.body.talla,
      //image:
    };
    console.log(req.body.description);

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect("/");
  },

  editar: (req, res) => {
    res.render("editProduct");
  },
};

module.exports = formProductController;
