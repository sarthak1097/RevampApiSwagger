var express = require('express');
var router = express.Router();

const user = require('./users');

router.get('/', function(req, res, next) {
  res.json({ title: 'API v1' });
});

router.use('/user', user);

module.exports = router;
