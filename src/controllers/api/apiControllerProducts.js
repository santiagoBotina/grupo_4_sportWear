const db = require("../../database/models");
let products = db.Producto;

const apiControllerProducts = {
  show: (req, res) => {
    products
      .findAll({
        attributes: ["idproducto", "nombre", "descripcion", "tipo_calzado_id"],
      })
      .then((products) => {
        products.map((product) => {
          product.setDataValue(
            "detail",
            `http://localhost:5000/products/detail/${product.idproducto}`
          );
        });

        //CONTADOR DEPORTIVO
        let deportivoCount = products.filter((product) => {
          return product.tipo_calzado_id == 1;
        });

        //CONTADOR DEPORTIVO
        let casualCount = products.filter((product) => {
          return product.tipo_calzado_id == 2;
        });

        //CONTADOR DEPORTIVO
        let trekkingCount = products.filter((product) => {
          return product.tipo_calzado_id == 3;
        });

        //CONTADOR DEPORTIVO
        let futbolCount = products.filter((product) => {
          return product.tipo_calzado_id == 4;
        });
        let respuesta = {
          count: products.length,
          countByCategory: {
            deportivo: deportivoCount.length,
            casual: casualCount.length,
            trekking: trekkingCount.length,
            futbol: futbolCount.length,
          },
          products: products,
        };
        res.json(respuesta);
      });
  },
  productDetail: (req, res) => {
    let productId = req.params.id;
    products.findByPk(productId).then((product) => {
      product.setDataValue(
        "imageUrl",
        `http://localhost:5000/images/our_products/${product.image}`
      );
      res.json(product);
    });
  },
};

module.exports = apiControllerProducts;
