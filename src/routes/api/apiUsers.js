const express = require("express");
const router = express.Router();
const apiUsersController = require("../../controllers/api/apiControllerusers");

router.get("/", apiUsersController.show);

module.exports = router;
