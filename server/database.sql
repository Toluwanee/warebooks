CREATE DATABASE warebooks_users;

CREATE TABLE users(
    userID SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    dateCreated TIMESTAMP DEFAULT NOW() 
);