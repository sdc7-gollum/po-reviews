require('dotenv').config();
const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/reviews`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected...'));

const RoomSchema = new Schema({
  _id: { type: Number, index: true },
  reviews: Array,
});

const Room = mongoose.model('Room', RoomSchema);

const getReviews = (id) => Room.find({ _id: id });

module.exports = { Room, getReviews };
