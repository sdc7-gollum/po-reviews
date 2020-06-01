require('dotenv').config();
require('newrelic');
const express = require('express');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  user: `${process.env.DB_PG_USER}`,
  host: `${process.env.DB_PG_HOST}`,
  database: `${process.env.DB_PG_DATABASE}`,
  port: `${process.env.DB_PG_PORT}`,
});

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CREATE
app.post('/api/reviews/:id', (req, res) => {
  const date = req.body.date.slice(0, 10);
  const queryStr = `INSERT INTO reviews
    (stay_id, name, pic, date, body,
    r_checkin, r_accuracy, r_location,
    r_communication, r_cleanliness, r_value)
  VALUES
    ('${Number(req.body.stay_id)}', '${req.body.name}', '${req.body.pic}', '${date}', '${req.body.body}',
    '${req.body.r_checkin}', '${req.body.r_accuracy}', '${req.body.r_location}',
    '${req.body.r_communication}', '${req.body.r_cleanliness}', '${req.body.r_value}');`;
  pool
    .query(queryStr)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

// READ
app.get('/api/reviews/:id', (req, res) => {
  const id = Number(req.params.id);
  const queryStr = `SELECT * FROM reviews WHERE stay_id BETWEEN ${id} AND ${id + 1}`;
  pool.query(queryStr)
    .then((rows) => {
      res.status(200).json(rows.rows);
    })
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

// UPDATE
app.put('/api/reviews/:id', (req, res) => {
  const date = req.body.date.slice(0, 10);
  console.log(date);
  const queryStr = `UPDATE reviews
  SET name = '${req.body.name}',
      pic = '${req.body.pic}',
      date = '${date}',
      body = '${req.body.body}',
      r_checkin = '${req.body.r_checkin}',
      r_accuracy = '${req.body.r_accuracy}',
      r_location = '${req.body.r_location}',
      r_communication = '${req.body.r_communication}',
      r_cleanliness = '${req.body.r_cleanliness}',
      r_value = '${req.body.r_value}'
  WHERE
      stay_id = '${Number(req.body.stay_id)}';`;
  pool
    .query(queryStr)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

// DELETE
app.delete('/api/reviews/:id', (req, res) => {
  const id = Number(req.body.stay_id);
  console.log(id);
  const queryStr = `DELETE FROM reviews WHERE stay_id = '${id}';`;
  pool
    .query(queryStr)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
