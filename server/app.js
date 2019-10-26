const express = require('express');
const compression = require('compression');
const db = require('../database');

const app = express();

app.use('/', express.static('dist'));
app.use(express.json());
app.use(compression());

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/artworks', (req, res) => {
  db.retrieveCollections(response => {
    res.status(200).send(response);
  });
});

app.get('/favorites', (req, res) => {
  db.retrieveFavorites(response => {
    res.status(200).send(response);
  });
});

app.post('/favorites', (req, res) => {
  db.saveFavorite(req.body.artwork_id);
  res.status(201).send();
});

app.get('/search', (req, res) => {
  db.filterByArtist(req.query.artist, response => {
    res.status(200).send(response);
  });
});

app.get('/department', (req, res) => {
  db.filterByDept(req.query.department, response => {
    res.status(200).send(response);
  });
});

app.get('/artists', (req, res) => {
  db.retrieveArtists(response => {
    res.status(200).send(response);
  });
});

module.exports = app;
