const faker = require('faker');
const fs = require('fs');
const imageOptions = require('./imageOptions');

const writeReviews = fs.createWriteStream('reviews.csv');
writeReviews.write('stay_id,name,pic,date,body,r_checkin,r_accuracy,r_location,r_communication,r_cleanliness,r_value\n', 'utf8');

function writeTenMillionReviews(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let numReviews = Math.floor(Math.random() * 3 + 3);
      if (id > 9999900) {
        numReviews = Math.floor(Math.random() * 50 + 25);
      }
      const getRandomRating = () => {
        const options = [5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 2, 1];
        return options[Math.floor(Math.random() * 12)];
      };
      const getRandomDate = () => {
        let day;
        const month = Math.floor(Math.random() * 4) + 1;
        if (month === 2) { day = Math.floor(Math.random() * 27) + 1; }
        if (month === 1 || month === 3 || month === 5) {
          day = Math.floor(Math.random() * 30) + 1;
        } day = Math.floor(Math.random() * 29) + 1;
        return `2020-${month}-${day}`;
      };
      for (let r = 1; r < numReviews + 1; r += 1) {
        let stayId;
        if (r < 10) {
          stayId = `${id}.0${r}`;
        } else stayId = `${id}.${r}`;
        const name = faker.name.firstName();
        const pic = imageOptions[Math.floor(Math.random() * 40)];
        const date = getRandomDate();
        const body = `${faker.lorem.paragraph()} ${faker.lorem.paragraph()} ${faker.lorem.paragraph()}`;
        const rCheckin = getRandomRating();
        const rAccuracy = getRandomRating();
        const rLocation = getRandomRating();
        const rCommunicatiom = getRandomRating();
        const rCleanliness = getRandomRating();
        const rValue = getRandomRating();
        const data = `${stayId},${name},${pic},${date},${body},${rCheckin},${rAccuracy},${rLocation},${rCommunicatiom},${rCleanliness},${rValue}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
      if (id % 100000 === 0) {
        console.log(`${(id / 100000)}%`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log('csv complete!');
});
