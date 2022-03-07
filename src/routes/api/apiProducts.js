const express = require("express");
const router = express.Router();
const apiProductsController = require("../../controllers/api/apiControllerProducts");

router.get("/", apiProductsController.show);
router.get("/:id", apiProductsController.productDetail);

module.exports = router;
