const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlaceSchema = new Schema({
  _id: Schema.Types.ObjectId,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

const ReviewSchema = new Schema({
  place: { type: Schema.Types.ObjectId, ref: 'Place' },
  username: String,
  pic: String,
  date: Date,
  body: String,
  ratings: [Number],
});

const Place = mongoose.model('Place', PlaceSchema);
const Review = mongoose.model('Review', ReviewSchema);

module.exports = { Place, Review };
