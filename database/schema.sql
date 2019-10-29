DROP DATABASE IF EXISTS heroku_06b8576f8e3594a;
CREATE DATABASE heroku_06b8576f8e3594a;

USE heroku_06b8576f8e3594a;

CREATE TABLE artworks (
  artwork_id BIGINT PRIMARY KEY,
  artist VARCHAR(255),
  title VARCHAR(255),
  image VARCHAR(255),
  departmentID BIGINT

);

CREATE TABLE favorites (
  artwork_id BIGINT PRIMARY KEY
);