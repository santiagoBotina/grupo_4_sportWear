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
      price: req.body.precio,
      description: req.body.description,
      category: req.body.categoria,
      talla: req.body.talla,
      image: null,
    };
    console.log(req.body.description);

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect("/");
  },

  editar: (req, res) => {
    let idProduct =req.params.idProduct

    let product = [
      {id: 1, name: "nike 1"},
      {id: 2, name: "nike 2"},
      {id: 3, name: "nike 3"},
      {id: 4, name: "nike 4"},
    ]

    let productToEdit = product[idProduct]



    res.render("editProduct", {productToEdit: productToEdit})



    //res.render("editProduct");
    
  },
  desplazar: (req,res) => {
    res.send("Cambio guardado")
  },
};

module.exports = formProductController;
