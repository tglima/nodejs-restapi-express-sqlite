const contactController = require('../controllers/contact.controller');
var express = require('express');
var router = express.Router();

router.post("/contact", contactController.SaveMessageContact);
module.exports = router;
