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
