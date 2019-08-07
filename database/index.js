const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'museumly'
});

connection.connect(err => {
  if (err) {
    console.log('db not connected: ', err);
  } else {
    console.log('db connected!');
  }
});

const retrieveCollections = () => {};

const retrieveFavorites = () => {};

const addFavorite = favorite => {
  connection.query(`INSERT INTO favorites (artwork_id) VALUES (${favorite.artwork_id})`);
};

module.exports = { retrieveCollections, retrieveFavorites, addFavorite };
