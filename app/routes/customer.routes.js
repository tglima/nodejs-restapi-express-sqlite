const customerController = require('../controllers/customer.controller');
var express = require('express');
var router = express.Router();
const jwtService = require('../services/jwt.service');

router.get("/client/search", jwtService.verifyJWT, customerController.findCustomerById);

module.exports = router;
