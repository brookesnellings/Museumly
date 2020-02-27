const mysql = require('mysql');

// for local development:
// const config = require('../config')
// const connection = mysql.createConnection(config.DBCONFIG)

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(process.env.DATABASE_URL); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function (err) {              // The server is either down
    if (err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();


connection.connect(err => {
  if (err) {
    console.log('DB not connected: ', err);
  } else {
    console.log('DB connected!');
  }
});

const seedDB = data => {
  const post = { artwork_id: data.objectID, artist: data.artistDisplayName, title: data.title, image: data.primaryImage, departmentID: '21' }
  connection.query(`INSERT INTO artworks SET ?`, post,
    (error, results) => {
      if (error) {
        console.log('Error seeding DB :', error);
      } else {
        console.log('DB seeded!');
      }
    }
  );
};

const retrieveCollections = (start, limit, callback) => {
  connection.query(
    `SELECT * FROM artworks ORDER BY title LIMIT ? OFFSET ?;`, [limit, start],
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
  connection.query(`SELECT * FROM artworks WHERE artist = ? LIMIT 30`, [artist], (error, results) => {
    if (error) {
      console.log('Error searching by Artist: ', error);
      callback(error);
    } else {
      console.log('Search successful!');
      callback(null, results);
    }
  });
};

const filterByDept = (dept, start, limit, callback) => {
  connection.query(`SELECT * FROM artworks WHERE departmentID = ? LIMIT ? OFFSET ?`, [dept, limit, start], (error, results) => {
    if (error) {
      console.log('Error filtering by Dept: ', error);
      callback(error);
    } else {
      console.log('Filter by Dept successful!');
      callback(null, results);
    }
  });
};

const retrieveFavorites = (start, limit, callback) => {
  connection.query(
    `SELECT * FROM artworks JOIN favorites WHERE (favorites.artwork_id=artworks.artwork_id)`,
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

const saveFavorite = (favorite, callback) => {
  let post = { artwork_id: favorite }
  connection.query(`INSERT INTO favorites SET ?`, post, (error, results) => {
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

const deleteArtwork = id => {
  connection.query(`DELETE FROM artworks WHERE artwork_id=${id};`, (error, results) => {
    if (error) {
      console.log('Error deleting artwork: ', error);
    } else {
      console.log('Artwork deleted!');
    }
  });
};

// deleteArtwork('483459');

module.exports = {
  seedDB,
  retrieveCollections,
  filterByArtist,
  filterByDept,
  retrieveFavorites,
  saveFavorite,
  retrieveArtists
};
