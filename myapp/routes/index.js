var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to PowerCoders' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome to PowerCoders' } );
});


router.get('/About', (req, res) => {
  res.render('about');
})

router.get('/Contact', (req, res) => {
  res.render('contact');
})

module.exports = router;
