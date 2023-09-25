CREATE DATABASE warebooks;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_created DEFAULT NOW()
);