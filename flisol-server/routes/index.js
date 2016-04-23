var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flisol 2016' });
});

router.post('/hello', function(req, res, next) {
  console.log('Hola flisol!');
  console.log('HEADERS: ');
  console.log(req.headers);
  console.log('BODY: ');
  console.log(req.body);
  console.log('DATA (sample): ');
  console.log(req.body.sample);
  res.end();
});
module.exports = router;
