// Import the required modules
import express from "express";
import pool from "../db";

// Create a new Router instance
const router = express.Router();
router.post("/", async(req, res) => {
    try {
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})



module.exports = router;