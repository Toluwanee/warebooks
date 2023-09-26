CREATE DATABASE warebooks_users;

CREATE TABLE users(
    userID SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    dateCreated TIMESTAMP DEFAULT NOW() 
);

CREATE TABLE users (
  id INT PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  profilePicture VARCHAR(255) NULL,
  phone VARCHAR(11),
  email VARCHAR(255),
  dateOfBirth DATE,
  gender VARCHAR(10),
  password VARCHAR(255),
  created_at TIMESTAMP
);

CREATE TABLE bookstore (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT NULL,
  createdBy INT,
  created_at TIMESTAMP
);

CREATE TABLE myBooks (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT NULL,
  createdBy INT,
  created_at TIMESTAMP
);

CREATE TABLE readingNow (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT NULL,
  createdBy INT,
  created_at TIMESTAMP
);