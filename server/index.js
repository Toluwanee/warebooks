const express = require("express");
const app = express();
const cors =  require("cors");
const pool = require("./db");
const dotenv = require("dotenv")
dotenv.config();
const port = process.env.PORT || 8080;


//middleware
app.use(cors());
app.use(express.json());

//ROUTES//


//CREATE A user
app.post("/registration", async(req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
        const newRegistration = await pool.query(
            "INSERT INTO users (firstName, lastName, email, phone, password, confirmPassword) VALUES($1, $2, $3, $4, $5, $6)",
             [firstName, lastName, email, phone, password, confirmPassword]
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

//Delete a row

app.listen(5000, () => {
    console.log("server has started on port 5000");
} ) 