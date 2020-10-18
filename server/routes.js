var express = require('express');
var router = express.Router();
var sentiment = require('./controller/sentiment.controller')
var config = require('./config/config');


router.get('/app/v1/facebook', sentiment.getFromFacebook);
router.get('/app/v1/twitter', sentiment.getFromTwitter);
router.get('/app/v1/instagram', sentiment.getFromInstagram);
router.get('/app/v1/all', sentiment.getFromAll);
module.exports = router;