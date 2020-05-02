const express = require('express');
const path = require('path');
require('dotenv').config();
const db = require('../database/index');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/reviews/:id', (req, res) => {
  db.getReviews(req.params.id)
    .then((rows) => res.json(rows))
    .catch((err) => res.json({ message: `Error: ${err}` }));
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
