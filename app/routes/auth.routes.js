const authController = require('../controllers/auth.controller');
var express = require('express');
var router = express.Router();

router.post('/auth', authController.auth);

module.exports = router;