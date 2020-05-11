const faker = require('faker');
const imageOptions = require('./imageOptions');
const db = require('./index');

const generateReviews = () => {
  const reviews = [];
  const numReviews = Math.floor(Math.random() * 470 + 30);
  // originally implemented method below via Math.floor(Math.random() * 5 + 1),
  // but refactored to better reflect reality
  const getRandomRating = () => {
    const options = [5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1];
    return options[Math.floor(Math.random() * 15)];
  };
  for (let i = 0; i < numReviews; i += 1) {
    const review = {
      name: faker.name.firstName(),
      pic: imageOptions[Math.floor(Math.random() * 40)],
      date: faker.date.between('2019-01-01', '2020-05-05'),
      body: faker.lorem.paragraphs(),
      r_checkin: getRandomRating(),
      r_accuracy: getRandomRating(),
      r_location: getRandomRating(),
      r_communication: getRandomRating(),
      r_cleanliness: getRandomRating(),
      r_value: getRandomRating(),
    };
    reviews.push(review);
  }
  return reviews;
};

for (let i = 0; i < 100; i += 1) {
  db.Room.collection.insertOne({ _id: i + 1, reviews: generateReviews() });
}
