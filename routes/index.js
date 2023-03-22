var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello! My name is Dan!' });
});
router.get('/:msg', function(req, res, next) {
  res.render('index', { title: req.params.msg });
});

module.exports = router;
