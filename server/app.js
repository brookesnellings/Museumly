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
  // console.log(req.query)
  let startNum;
  let limitNum;
  if (req.query.start === '' || req.query.limit === '') {
    startNum = 0;
    limitNum = 10;
  }
  else {
    startNum = parseInt(req.query.start);
    limitNum = parseInt(req.query.limit);
  }
  // console.log('startNum', startNum)
  db.retrieveCollections(startNum, limitNum, (err, response) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(response);
    }
  });
});

app.get('/favorites', (req, res) => {
  console.log('favorites')
  let startNum;
  let limitNum;
  if (req.query.start === '' || req.query.limit === '') {
    startNum = 0;
    limitNum = 10;
  }
  else {
    startNum = parseInt(req.query.start);
    limitNum = parseInt(req.query.limit);
  }
  console.log('hey', startNum, limitNum)
  db.retrieveFavorites(startNum, limitNum, (err, response) => {
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
  let startNum;
  let limitNum;
  if (req.query.start === '' || req.query.limit === '') {
    startNum = 0;
    limitNum = 10;
  }
  else {
    startNum = parseInt(req.query.start);
    limitNum = parseInt(req.query.limit);
  }
  db.filterByDept(req.query.department, startNum, limitNum, (err, response) => {
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
