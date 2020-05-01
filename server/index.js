const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/reviews', (req, res) => {
  res.send('testing GET request on /api/reviews endpoint');
});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
