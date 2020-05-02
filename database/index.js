const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlaceSchema = new Schema({
  reviews: Array,
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports.Place = Place;
