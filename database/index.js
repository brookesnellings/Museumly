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

const retrieveCollections = () => {
  connection.query(`SELECT * FROM artworks;`, (error, results) => {
    if (error) {
      console.log('Error retrieving Collections: ', error);
    } else {
      console.log('Collections retrieved!', results);
      callback(results);
    }
  });
};

const filterByArtist = artist => {
  connection.query(`SELECT * FROM artworks WHERE artist=${artist};`, (error, results) => {
    if (error) {
      console.log('Error searching by Artist: ', error);
    } else {
      console.log('Search successful!', results);
      callback(results);
    }
  });
};

const retrieveFavorites = callback => {
  connection.query(`SELECT * FROM favorites;`, (error, results) => {
    if (error) {
      console.log('Error retrieving Favorites: ', error);
    } else {
      console.log('Favorites retrieved!', results);
      callback(results);
    }
  });
};

const addFavorite = favorite => {
  connection.query(
    `INSERT INTO favorites (artwork_id) VALUES (${favorite.artwork_id})`,
    (error, results) => {
      if (err) {
        console.log('Error adding favorite :', error);
      } else {
        console.log('Favorite added!', results);
      }
    }
  );
};

module.exports = { retrieveCollections, filterByArtist, retrieveFavorites, addFavorite };
