var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    layout:null,
    title: "My cite",
    name: req.login.auth ? req.login.username : "Guest"
  });
  /* res.render('index',
  
    {
      title: 'Hello! Welcome! ',
      name: req.login.auth ? req.login.username : "guest"
    }); */
});

router.all('/', function (req, res, next) {

  res.render('index', { title: 'My cite'});
});

router.all('/books/:fdgh', function (req, res, next) {

  res.render('index', { title: 'My cite' });
});

router.get('/cats?ndogs?', function (req, res, next) {
  res.render('index', { title: "cats",name:"Joshua" });
});

router.get('/c(at)+s', function (req, res, next) {
  res.render('index', { title: "catatatat..",name:"Dan" });
});

router.get('/fro*do', function (req, res, next) {
  res.render('index', { title: "frodo is hungry,feed him..",name:"Joshua" });
});

router.get('/cat|dog/', function (req, res, next) {
  res.render('index', { title: "cat",name:"Omar" });
});


router.get('/:msg', function (req, res, next) {
  res.render('index', { title: req.params.msg });
});



module.exports = router;
