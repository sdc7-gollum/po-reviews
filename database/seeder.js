const faker = require('faker');
const imageOptions = require('./imageOptions');
const db = require('./index');

const generateReviews = () => {
  const reviews = [];
  const numReviews = Math.floor(Math.random() * 40 + 30);
  const getRandomRating = () => {
    const options = [5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 2, 1];
    return options[Math.floor(Math.random() * 12)];
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

const data = [];

for (let i = 0; i < 100; i += 1) {
  data.push({ id: i + 1, reviews: generateReviews() });
}

db.Room.collection.insertMany(data, (err) => {
  if (err) {
    console.log(`Error while seeding the database: ${err}`);
  }
  db.connection.close();
  console.log('DB successfully seeded and now closing...');
});
