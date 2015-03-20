var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewShema = new Schema({

name: String,

placeType: String,

stars: Number

});

reviewShema.statics.findByName = function (name, cb) {
  this.find({ name: new RegExp(name, 'i') }, cb);
}

module.exports = mongoose.model('Review', reviewShema);