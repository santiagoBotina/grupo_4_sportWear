const formProductController = {
  index: (req, res) => {
    res.render("formProduct");
  },
  editar: (req, res) => {
    res.render("editProduct");
  },
};

module.exports = formProductController;
