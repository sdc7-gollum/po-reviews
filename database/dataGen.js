const faker = require('faker');
const fs = require('fs');
const imageOptions = require('./imageOptions');


const writeReviews = fs.createWriteStream('reviews.csv');
writeReviews.write('id,name,pic,date,body,r_checking,r_accuracy,r_location,r_communication,r_cleanliness,r_value\n', 'utf8');


function writeTenMillionReviews(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const numReviews = Math.floor(Math.random() * 3 + 3);
      const getRandomRating = () => {
        const options = [5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 2, 1];
        return options[Math.floor(Math.random() * 12)];
      };
      for (let r = 0; r < numReviews; r += 1) {
        const name = faker.name.firstName();
        const pic = imageOptions[Math.floor(Math.random() * 40)];
        const body = faker.lorem.paragraphs();
        const rCheckin = getRandomRating();
        const rAccuracy = getRandomRating();
        const rLocation = getRandomRating();
        const rCommunicatiom = getRandomRating();
        const rCleanliness = getRandomRating();
        const rValue = getRandomRating();
        const data = `${id},${name},${pic},${body},${rCheckin},${rAccuracy},${rLocation},${rCommunicatiom},${rCleanliness},${rValue}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
      console.log(id);
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log('csv built');
});
