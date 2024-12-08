const express = require("express");
const router = express.Router();
const controller = require("../controllers/uploadBooksController")

router.post("/", controller.uploadBooksController);
module.exports = router;