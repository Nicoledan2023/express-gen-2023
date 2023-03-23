var express = require('express');
const router = express.Router();
const page = require('../model/page');

/* GET home page. */
router.get('/', function (req, res, next) {
  loadPage('breeds',req,res,next);
  /* res.render('index', {
    layout: null,
    title: "My cite",
    name: req.login.auth ? req.login.username : "Guest"
  }); */
});

router.get('/:key', async function (req, res, next) {
  loadPage(req.params.key,req,res,next);
});

/* router.all('/', function (req, res, next) {

  res.render('index', { title: 'My cite'});
}); */

/* router.all('/books/:fdgh', function (req, res, next) {

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
 */

let loadPage = async function (key,req,res,next) { 
  const pg = await page.getPage(key);
  console.log(pg);
  if (pg.status == false) {
    next();
   
  } else {

    res.render('index', {
     
      title: pg.rows.title,
      name: req.login.auth ? req.login.username : "Guest",
      content: pg.rows.content
    });
  }
};

module.exports = router;
