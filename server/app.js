const express = require('express');
const cors = require('cors')
const compression = require('compression');
const db = require('../database');

const app = express();

app.use('/', express.static('dist'));
app.use(express.json())
app.use(cors());
app.use(compression());

app.get('/artworks', (req, res) => {
  db.retrieveCollections((err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  });
});

app.get('/favorites', (req, res) => {
  db.retrieveFavorites((err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  });
});

app.post('/favorites', (req, res) => {
  db.saveFavorite(req.body.artwork_id, (err, favorite) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(201).send(favorite);
    }
  });
});

app.get('/search', (req, res) => {
  db.filterByArtist(req.query.artist, (err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  });
});

app.get('/department', (req, res) => {
  db.filterByDept(req.query.department, (err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  });
});

app.get('/artists', (req, res) => {
  db.retrieveArtists((err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  });
});

module.exports = app;
