const homeController = require('../controllers/home.controller');
var express = require('express');
var router = express.Router();

router.get("/", homeController.getHome);

module.exports = router;