var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Review = require('../database/reviews');



router.route('/api/')

.get(function (req, res) {
	Review.find({}, function (err, reviews) {
		if (err) {
			res.status(500).send({'error': err});
			} else {
					res.send(reviews);
				   }
		});
	});
router.route('/api/')
.post(function (req, res) {
	if (req.body.name === undefined || req.body.placeType === undefined || req.body.stars === undefined){
		res.status(400).json({error: 'Erreur niveau des paramètres'});
	}else {
		var newReview = {
			name: req.body.name,
			placeType: req.body.placeType,
			stars: req.body.stars
		};
		Review.create(newReview, function (err, reviews) {
		if (err) {
			res.status(500).send({'error': err});
			} else {
					res.send(reviews);
				   }
		});
	}
	});

router.route('/api/:id')
.put(function (req, res) {
	if (req.body.name === undefined || req.body.placeType === undefined || req.body.stars === undefined){
		res.status(400).json({error: 'Erreur niveau des paramètres'});
	}else {
			var reviewid = {_id: req.params.id};
			var newReview = {
				name: req.body.name,
				placeType: req.body.placeType,
				stars: req.body.stars
			}
			console.log(newReview);
	  		Review.findOneAndUpdate(reviewid, newReview, function (err, reviews) {
	  		if (err) {
				res.status(500).send({'error': err});
			} else {
					res.send('Update réussi');
				   }
	  		 });
	}
	});

router.route('/api/:id')
.get(function (req, res) {
			var reviewid = req.params.id;
	  		Review.findById(reviewid, function (err, reviews) {
	  		if (err) {
				res.status(500).send({'error': err});
			} else {
					res.send(reviews);
				   }
	  		 });
	});

router.route('/api/:id')
.delete(function (req, res) {
			var reviewid = req.params.id;
	  		Review.findByIdAndRemove(reviewid, function (err, reviews) {
	  		if (err) {
				res.status(500).send({'error': err});
			} else {
					res.send('delete sucess');
				   }
	  		 });
	});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reviews', { title: 'Reviews',reviews: reviews });
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
