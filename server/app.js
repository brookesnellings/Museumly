const express = require('express');
const db = require('../database');

const app = express();

app.use('/', express.static('dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/favorites', (req, res) => {
  db.retrieveFavorites(response => {
    res.send(response);
  });
});

app.get('/artworks', (req, res) => {
  db.retrieveCollections(response => {
    res.send(response);
  });
});

app.post('/favorites', (req, res) => {
  console.log('THIS IS THE REQUEST: ', req.body);
  db.saveFavorite(req.body.artwork_id)
  res.send('posted yeah');
});

module.exports = app;
