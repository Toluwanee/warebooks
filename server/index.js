import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sql from "./db.js";

const app = express();
const port = process.env.PORT || 5001;

// Import book data
const bookData = require('./data/BookData');

//middleware
app.use(cors());
app.use(express.json());

app.get('/api/books', (req, res) => {
    res.json(bookData);
  });

//CREATE A user
app.post("/registration", async(req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName, email, phone, password } = req.body;

        const salt = await bcrypt.genSalt(10);

        const newRegistration = await pool.query(
            "INSERT INTO users (firstName, lastName, email, phone, password) VALUES($1, $2, $3, $4, $5)",
             [firstName, lastName, email, phone, password]
             );
             res.json(newRegistration);
    } catch (err) {
        console.error(err.message);
    }
});

//Create the db tables for the system
app.get("/create-tables", async (req, res) => {
    try {
        await pool.query(`CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            confirm_password VARCHAR(255) NOT NULL,
            date_created DEFAULT NOW()
        )`);
    
        res.json("Tables created successfully")
    } catch (error) {
        console.log(error.message)
    }
})
//Update a row


// GET ALL TOSOS
//GET A todo
//Update a todo
//Delete a todo

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  