const express = require('express');
const db = require('../database');

const app = express();

app.use('/', express.static('dist'));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/favorites', (req, res) => {
  db.retrieveFavorites(response => {
    res.send(response);
  });
});

module.exports = app;
