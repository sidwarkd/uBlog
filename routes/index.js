var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect(301, 'http://www.microcasts.tv/blog');
});

module.exports = router;
