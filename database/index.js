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
      } else {
        console.log('Collections retrieved!');
        callback(results);
      }
    }
  );
};

const filterByArtist = (artist, callback) => {
  connection.query(`SELECT * FROM artworks WHERE artist="${artist}";`, (error, results) => {
    if (error) {
      console.log('Error searching by Artist: ', error);
    } else {
      console.log('Search successful!');
      callback(results);
    }
  });
};

const filterByDept = (dept, callback) => {
  connection.query(`SELECT * FROM artworks WHERE departmentID="${dept}";`, (error, results) => {
    if (error) {
      console.log('Error filtering by Dept: ', error);
    } else {
      console.log('Filter by Dept successful!');
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

const saveFavorite = favorite => {
  connection.query(`INSERT INTO favorites (artwork_id) VALUES (${favorite})`, (error, results) => {
    if (error) {
      console.log('Error adding favorite :', error);
    } else {
      console.log('Favorite added!');
    }
  });
};

const retrieveArtists = callback => {
  connection.query(`SELECT artist FROM artworks;`, (error, results) => {
    if (error) {
      console.log('Error retrieving Artists: ', error);
    } else {
      console.log('Artists retrieved!');
      callback(results);
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
