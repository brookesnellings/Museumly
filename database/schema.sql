DROP DATABASE IF EXISTS museumly;
CREATE DATABASE museumly;

USE museumly;

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