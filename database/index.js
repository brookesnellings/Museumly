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

const seedDB = data => {
  console.log('this is the DATA:', data);
  connection.query(
    `INSERT INTO artworks (artwork_id, artist, title, image) VALUES (${data.objectID}, "${data.artistDisplayName}", "${data.title}", "${data.primaryImage}")`,
    (error, results) => {
      if (error) {
        console.log('Error seeding DB :', error);
      } else {
        console.log('DB seeded!', results);
      }
    }
  );
};

const retrieveCollections = callback => {
  connection.query(`SELECT * FROM artworks;`, (error, results) => {
    if (error) {
      console.log('Error retrieving Collections: ', error);
    } else {
      console.log('Collections retrieved!');
      callback(results);
    }
  });
};

const filterByArtist = artist => {
  connection.query(`SELECT * FROM artworks WHERE artist="${artist}";`, (error, results) => {
    if (error) {
      console.log('Error searching by Artist: ', error);
    } else {
      console.log('Search successful!', results);
      callback(results);
    }
  });
};

const retrieveFavorites = callback => {
  connection.query(
    `SELECT * FROM artworks JOIN favorites WHERE (favorites.artwork_id=artworks.artwork_id);`,
    (error, results) => {
      if (error) {
        console.log('Error retrieving Favorites: ', error);
      } else {
        console.log('Favorites retrieved!');
        callback(results);
      }
    }
  );
};

const addFavorite = favorite => {
  connection.query(
    `INSERT INTO favorites (artwork_id) VALUES (${favorite.artwork_id})`,
    (error, results) => {
      if (err) {
        console.log('Error adding favorite :', error);
      } else {
        console.log('Favorite added!');
      }
    }
  );
};

module.exports = { seedDB, retrieveCollections, filterByArtist, retrieveFavorites, addFavorite };
