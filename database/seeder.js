const faker = require('faker');
const db = require('./index');

const generateReviews = () => {
  const reviews = [];
  const numReviews = Math.floor(Math.random() * 470 + 30);
  const getRandomRating = () => Math.floor(Math.random() * 5 + 1);
  for (let i = 0; i < numReviews; i += 1) {
    const review = {
      name: faker.name.firstName(),
      pic: faker.image.people(),
      date: faker.date.recent(),
      body: faker.lorem.paragraph(),
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
