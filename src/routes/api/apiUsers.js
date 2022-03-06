const express = require("express");
const router = express.Router();
const apiUsersController = require("../../controllers/api/apiControllerusers");

router.get("/", apiUsersController.show);
router.get("/:id", apiUsersController.userDetail);

module.exports = router;
