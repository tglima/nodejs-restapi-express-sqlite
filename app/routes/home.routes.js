const homeController = require('../controllers/home.controller');
var express = require('express');
var router = express.Router();
const jwtService = require('../services/jwt.service');

router.get("/", jwtService.verifyJWT, homeController.getHome);

module.exports = router;