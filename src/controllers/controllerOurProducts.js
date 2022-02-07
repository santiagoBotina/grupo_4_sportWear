const db = require("../database/models");

const ourProductsController = {
  index: function (req, res) {
    db.findAll().then((products) => {
      res.render("our_Products", { products });
    });
  },
};

module.exports = ourProductsController;
