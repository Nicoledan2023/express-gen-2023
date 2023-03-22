var express = require('express');
var router = express.Router();

router.get('/:fro', function(req, res, next) {
  res.send(req.params.fro);
}); 

/* GET users listing. */
router.get('/:fromId-:toId', function(req, res, next) {
  res.render('book', {fromId:req.params.fromId,toId:req.params.fromId});
}); 

router.get('/:bookId([1-9][0-9]*)', function(req, res, next) {
  res.render('book', {bookId:req.params.bookId});
});

module.exports = router;
