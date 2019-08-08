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

app.post('/artwork', (req, res) => {
  console.log('THIS IS THE REQUEST: ', req);
  db.seedDB(req);
});

module.exports = app;
