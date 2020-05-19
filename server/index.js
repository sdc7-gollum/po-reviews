require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('../database/index');
// const port = 3003;

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/reviews/:id', (req, res) => {
  db.getReviews(req.params.id)
    .then((rows) => res.status(200).json(rows))
    .catch((err) => res.status(400).json({ message: `Error: ${err}` }));
});

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));
// app.listen(port, () => console.log(`listening on port ${port}`));
