require('dotenv').config();
const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect(`mongodb://${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/reviews`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const { connection } = mongoose;
connection.on('err', console.error.bind(console, 'connection error:'));
connection.once('open', () => console.log('Database connected...'));

const RoomSchema = new Schema({
  id: { type: Number, index: true },
  reviews: Array,
});

const Room = mongoose.model('Room', RoomSchema);

const postReviews = (reqbody) => {
  const newRoom = new Room(reqbody);
  newRoom.save();
};
const getReviews = (id) => Room.find({ id });
const putReviews = (id, reqbody) => Room.findByIdAndUpdate(id, reqbody, { new: true });
const deleteReviews = (id) => Room.findByIdandDelete(id);

module.exports = {
  connection, Room, postReviews, getReviews, putReviews, deleteReviews,
};
