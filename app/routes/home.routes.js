const homeController = require('../controllers/home.controller');
var express = require('express');
var router = express.Router();

router.get("/api/v1/", homeController.getHome);

module.exports = router;