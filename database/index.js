require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: `${process.env.DB_PG_USER}`,
  host: `${process.env.DB_PG_HOST}`,
  database: `${process.env.DB_PG_DATABASE}`,
  port: `${process.env.DB_PG_PORT}`,
});

pool.on('error', console.error.bind('connection error'));
pool.on('connect', () => console.log('Database connected...'));

const postReviews = (id, reqbody) => {
  const queryStr = `INSERT INTO reviews
    (stay_id, name, pic, date, body,
    r_checking, r_accuracy, r_location,
    r_communication, r_cleanliness, r_value)
  VALUES
    (${reqbody.stay_id}, ${reqbody.name}, ${reqbody.pic}, ${reqbody.date}, ${reqbody.body},
    ${reqbody.r_checking}, ${reqbody.r_accuracy}, ${reqbody.r_location},
    ${reqbody.r_communication}, ${reqbody.r_cleanliness}, ${reqbody.r_value});`;
  return pool
    .query(queryStr)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
};


const getReviews = (id) => {
  const queryStr = `SELECT * FROM reviews WHERE stay_id BETWEEN ${id} AND ${id + 1}`;
  return pool
    .query(queryStr)
    .then((res) => console.log('db response', res))
    .catch((e) => console.error('ERROR', e.stack));
};

const putReviews = (id, reqbody) => {
  const queryStr = `UPDATE reviews
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
    .query(queryStr)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
};

const deleteReviews = (id) => {
  const queryStr = `DELETE FROM reviews WHERE stay_id = ${id};`;
  pool
    .query(queryStr)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
};

module.exports = {
  postReviews, getReviews, putReviews, deleteReviews,
};
