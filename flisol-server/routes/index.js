var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flisol 2016' });
});

router.get('/hello', function(req, res, next) {
  console.log('Hola flisol!');
  res.send('Hola flisol!');
});
module.exports = router;
