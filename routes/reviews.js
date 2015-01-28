var express = require('express');
var router = express.Router();
var _ = require('lodash');

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
	if (req.body.name === undefined || req.body.placeType === undefined || req.body.stars === undefined){
		res.status(400).json({error: 'Erreur niveau des paramètres'});
	}else {
	var newReview = {
		name: req.body.name,
		placeType: req.body.placeType,
		stars: req.body.stars
	}
	reviews.push(newReview);
	res.send('Ajout réussi', reviews);
  }
});
router.delete('/api/', function (req, res) {
  res.send(req.body);
});

router.get('/api/:id', function (req, res) {
	var reviewid = req.params.id;
	if (reviewid > 0 && reviewid<= reviews.length){
 		 res.send(reviews[reviewid]);
	}else{
		res.status(404).json({error: 'Erreur cet id ne peut être supprimé hors du tableau'});
	}
});

router.post('/api/:id', function (req, res) {
	if (req.body.name === undefined || req.body.placeType === undefined || req.body.stars === undefined){
		res.status(400).json({error: 'Erreur niveau des paramètres'});
	}else {
			var reviewid = req.params.id;
			var newReview = {
					name: req.body.name,
					placeType: req.body.placeType,
					stars: req.body.stars
				}
			reviews.push(newReview);
			res.send(reviews);
		}
});
router.put('/api/:id', function (req, res) {
		if (req.body.name === undefined || req.body.placeType === undefined || req.body.stars === undefined){
		res.status(400).json({error: 'Erreur niveau des paramètres'});
	}else {
		if (reviewid > 0 && reviewid<= reviews.length){
			var newReview = {
				name: req.body.name,
				placeType: req.body.placeType,
				stars: req.body.stars
			}
			var reviewid = req.params.id;
			reviews[reviewid]= newReview;
	  		res.send(reviews);
		}else{
			res.status(404).json({error: 'Erreur cet id ne peut être supprimé hors du tableau'});
		}
		
	}
});
router.delete('/api/:id', function (req, res) {
	var reviewid = req.params.id;
	if (reviewid > 0 && reviewid<= reviews.length)
	{
		res.send(_.pullAt(reviews, reviewid));
	}else
	{
		res.status(400).json({error: 'Erreur cet id ne peut être supprimé hors du tableau'});
	}
  
});

module.exports = router;
