const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/po-reviews', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected...'));

const PlaceSchema = new Schema({
  _id: Number,
  reviews: Array,
});

const Place = mongoose.model('Place', PlaceSchema);

const getReviews = (id) => Place.find({ _id: id });

module.exports = { Place, getReviews };
