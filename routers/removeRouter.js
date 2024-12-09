const express = require("express");
const router = express.Router();
const controller = require("../controllers/removeController")
router.delete("/", controller.removeController)
module.exports = router;