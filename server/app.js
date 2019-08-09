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
    res.send(response);
  });
});

app.get('/favorites', (req, res) => {
  db.retrieveFavorites(response => {
    res.send(response);
  });
});

app.post('/favorites', (req, res) => {
  console.log('THIS IS THE REQUEST: ', req.body);
  db.saveFavorite(req.body.artwork_id);
  res.send('posted yeah');
});

app.get('/search', (req, res) => {
  db.filterByArtist(req.query.artist, response => {
    res.send(response);
  });
});

app.get('/department', (req, res) => {
  db.filterByDept(req.query.department, response => {
    res.send(response);
  });
});

app.get('/artists', (req, res) => {
  db.retrieveArtists(response => {
    console.log('RESPONSE RESPONSE RESPONSE: ', response);
    res.send(response);
  });
});

module.exports = app;
