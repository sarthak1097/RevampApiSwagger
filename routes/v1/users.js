var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({user: 'v1 User' });
});

module.exports = router;
