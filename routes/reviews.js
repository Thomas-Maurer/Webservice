var express = require('express');
var router = express.Router();
var reviews =  [{
name: 'McDo',
placeType: 'Fastfood',
stars: 3
},
{
name: 'McDo2',
placeType: 'Fastfood',
stars: 15
},
{
name: 'McDo3',
placeType: 'Fastfood',
stars: 4
}];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reviews', { title: 'Reviews',reviews: reviews });
});

router.get('/api/', function (req, res) {
  res.send(reviews);
});

router.post('/api/', function (req, res) {
  res.send(req.body);
});
router.delete('/api/', function (req, res) {
  res.send(req.body);
});

router.get('/api/:id', function (req, res) {
	var reviewid = req.params.id;
  res.send(reviews[reviewid]);
});

router.post('/api/:id', function (req, res) {
	var reviewid = req.params.id;
  res.send(req.body);
});
router.delete('/api/:id', function (req, res) {
	var reviewid = req.params.id;
  res.send(req.body);
});

module.exports = router;
