const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'museumly'
});

connection.connect(err => {
  if (err) {
    console.log('DB not connected: ', err);
  } else {
    console.log('DB connected!');
  }
});

const seedDB = data => {
  connection.query(
    `INSERT INTO artworks (artwork_id, artist, title, image, departmentID) VALUES (${data.objectID}, "${data.artistDisplayName}", "${data.title}", "${data.primaryImage}", 21)`,
    (error, results) => {
      if (error) {
        console.log('Error seeding DB :', error);
      } else {
        console.log('DB seeded!');
      }
    }
  );
};

const retrieveCollections = callback => {
  connection.query(
    `SELECT * FROM artworks ORDER BY RAND()
  LIMIT 75;`,
    (error, results) => {
      if (error) {
        console.log('Error retrieving Collections: ', error);
        callback(error);
      } else {
        console.log('Collections retrieved!');
        callback(null, results);
      }
    }
  );
};

const filterByArtist = (artist, callback) => {
  connection.query(`SELECT * FROM artworks WHERE artist="${artist}";`, (error, results) => {
    if (error) {
      console.log('Error searching by Artist: ', error);
      callback(error);
    } else {
      console.log('Search successful!');
      callback(null, results);
    }
  });
};

const filterByDept = (dept, callback) => {
  connection.query(`SELECT * FROM artworks WHERE departmentID="${dept}";`, (error, results) => {
    if (error) {
      console.log('Error filtering by Dept: ', error);
      callback(error);
    } else {
      console.log('Filter by Dept successful!');
      callback(null, results);
    }
  });
};

const retrieveFavorites = callback => {
  connection.query(
    `SELECT * FROM artworks JOIN favorites WHERE (favorites.artwork_id=artworks.artwork_id);`,
    (error, results) => {
      if (error) {
        console.log('Error retrieving Favorites: ', error);
        callback(error);
      } else {
        console.log('Favorites retrieved!');
        callback(null, results);
      }
    }
  );
};

const saveFavorite = favorite => {
  connection.query(`INSERT INTO favorites (artwork_id) VALUES (${favorite})`, (error, results) => {
    if (error) {
      console.log('Error adding favorite :', error);
      callback(error);
    } else {
      console.log('Favorite added!');
      callback(null, results)
    }
  });
};

const retrieveArtists = callback => {
  connection.query(`SELECT artist FROM artworks;`, (error, results) => {
    if (error) {
      console.log('Error retrieving Artists: ', error);
      callback(error);
    } else {
      console.log('Artists retrieved!');
      callback(null, results);
    }
  });
};

module.exports = {
  seedDB,
  retrieveCollections,
  filterByArtist,
  filterByDept,
  retrieveFavorites,
  saveFavorite,
  retrieveArtists
};
