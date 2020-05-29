require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'zdeckert',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
});

pool.on('error', console.error.bind(console, 'connection error:'));
pool.on('connect', () => console.log('Database connected...'));

const postReviews = (id, reqbody) => {
  const query = `INSERT INTO reviews
    (stay_id, name, pic, date, body,
    r_checking, r_accuracy, r_location,
    r_communication, r_cleanliness, r_value)
  VALUES
    (${reqbody.stay_id}, ${reqbody.name}, ${reqbody.pic}, ${reqbody.date}, ${reqbody.body},
    ${reqbody.r_checking}, ${reqbody.r_accuracy}, ${reqbody.r_location},
    ${reqbody.r_communication}, ${reqbody.r_cleanliness}, ${reqbody.r_value});`;
  pool
    .query(query)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
};

const getReviews = (id) => {
  const query = `SELECT * FROM reviews WHERE stay_id BETWEEN ${id} AND ${id + 1};`;
  pool
    .query(query)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
};

const putReviews = (id, reqbody) => {
  const query = `UPDATE reviews
    SET name = ${reqbody.name},
        pic = ${reqbody.pic},
        date = ${reqbody.date},
        body = ${reqbody.body},
        r_checking =  ${reqbody.r_checking}
        r_accuracy =  ${reqbody.r_accuracy}
        r_location = ${reqbody.r_location}
        r_communication = ${reqbody.r_communication}
        r_cleanliness = ${reqbody.r_cleanliness}
        r_value = ${reqbody.r_value},
    WHERE
        stay_id =  ${reqbody.stay_id};`;
  pool
    .query(query)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
};

const deleteReviews = (id) => {
  const query = `DELETE FROM reviews WHERE stay_id = ${id};`;
  pool
    .query(query)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
};

module.exports = {
  postReviews, getReviews, putReviews, deleteReviews,
};
