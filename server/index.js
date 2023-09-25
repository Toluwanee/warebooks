const express = require("express");
const app = express();
const cors =  require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());



//Create the db tables for the system
app.get("/create-tables", async (req, res) => {
    try {
        await pool.query(`CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            date_created DEFAULT NOW()
        )`);
    
        res.json("Tables created successfully")
    } catch (error) {
        console.log(error.message)
    }
})

//CREATE A TO DO
app.post("/registration", async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const newRegistration = await pool.query(
            "INSERT INTO users (name, email, password) VALUES($1, $2, $3)",
            [name, email, password]
            );

            res.json(newRegistration)
    } catch (err) {
        console.error(err.message);
    }
})


// GET ALL TOSOS
//GET A todo
//Update a todo
//Delete a todo

app.listen(5001, () => {
    console.log("server has started on port 5001");
} ) 