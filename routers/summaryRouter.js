const express = require("express");
const router = express.Router();
const controller = require("../controllers/summaryController")
router.get("/", controller.summaryController)
module.exports = router;