'use strict'

var mongoose = require('mongoose');

var mongolabStringConnexion = 'mongodb://webservice:webservice@ds037571.mongolab.com:37571/webservices';

mongoose.connect(mongolabStringConnexion);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('Connexion establish to ' + mongolabStringConnexion);
});