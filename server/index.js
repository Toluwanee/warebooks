import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import morgan from "morgan";
import jwt from "jsonwebtoken";
import sql from "./db.js";
import bookData  from './data/BookData.js';


const app = express();
const port = process.env.PORT || 5001;

//middleware
app.use(cors());
app.use(express.json());


//for registration
app.get("/api/v1/users", async (req, res) => {
    const users = await sql`SELECT * FROM users`;
    if (users) {
      res.status(200).send(users);
    } else {
      res.status(404).send("Error here!");
    }
  });
  
  app.post("/api/v1/register", async (req, res) => {
    const { firstName, lastName, phone, email, dateofbirth, password } =
      req.body;
  
    console.log("res", res.statusCode);
  
    try {
      
  
      const emailCheck =
        await sql`SELECT COUNT(*) FROM users WHERE email = ${email}`;
      const emailCount = emailCheck[0].count;
  
      if (emailCount > 0) {
        res.status(400).send("Email is already in use.");
        return;
      }
  
      const phoneCheck =
        await sql`SELECT COUNT(*) FROM users WHERE phone = ${phone}`;
      const phoneCount = phoneCheck[0].count;
  
      if (phoneCount > 0) {
        res.status(400).send("Phone number already exists");
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const response = await sql`
        INSERT INTO users (firstName, lastName, phone, email, dateofbirth, gender, password)
        VALUES (${firstName}, ${lastName}, ${phone}, ${email}, ${dateofbirth}, ${hashedPassword})
        RETURNING *`;
  
      if (response) {
        res.status(201).send(response);
      } else {
        res.status(500).send("Internal server Error");
      }
    } catch (error) {
      // console.error("Error inserting user:", error);
      res.status(500).send("Internal server Error");
    }
  });
  
  app.post("/api/v1/login", async (req, res) => {
    const { email, password } = req.body;
  
    console.log("res", res.statusCode);
    console.log("email", email);
  
    try {
      const emailCheck = await sql`SELECT * FROM users WHERE email = ${email};`;
  
      if (emailCheck[0]) {
        bcrypt.compare(password, emailCheck[0].password, function (err, result) {
          if (result) {
            var token = jwt.sign(
              {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
                firstname: emailCheck[0].firstname,
                lastname: emailCheck[0].lastname,
                phone: emailCheck[0].phone,
                email: emailCheck[0].email,
                myforum: emailCheck[0].myforum,
                forum: emailCheck[0].forum,
                newsletter: emailCheck[0].newsletter,
              },
              "shhhhh"
            );
            res.status(201).send({
              message: "Login Successful",
              token,
            });
          } else {
            res.status(500).send("Incorrect Login details");
          }
        });
      } else {
        res.status(500).send("Incorrect Login details");
      }
    } catch (error) {
      // console.error("Error inserting user:", error);
      res.status(500).send("Internal server Error");
    }
  });
  
  
  app.post("/api/v1/:user/createJournal", async (req, res) => {
    const { title, user, journal } = req.body;
  
    console.log("res", res.statusCode);
  
    try {
      const response = await sql`
        INSERT INTO journals (title, user, journal)
        VALUES (${title}, ${user}, ${journal})
        RETURNING *`;
  
      if (response) {
        res.status(201).send(response);
      } else {
        res.status(500).send("Internal server Error")
      }
    } catch (error) {
      // console.error("Error inserting user:", error);
      res.status(500).send("Internal server Error");
    }
  });
  
  app.get("/api/v1/:user/getJournals", async (req, res) => {
    
    try {
      const { user } = req.params
      const journal = await sql`SELECT * FROM journals WHERE user = ${user}`;
      if (journal) {
        res.status(200).send(journal);
      } else {
        res.status(40).send("No rsources found");
      }
    } catch (error) {
      res.status(500).send("Internal server Error");
    }
  });
  
  app.put("/api/v1/:user/upadateJournal/:id", async (req, res) => {
    
    try {
      const { user, id } = req.params
      const {journal} = req.body
      const updatedJournal = await sql`UPDATE journals SET journal = ${journal} WHERE id = ${id} RETURNING *`;
      if (updatedJournal && updatedJournal.length > 0) {
        res.status(200).send(updatedJournal);
      } else {
        res.status(40).send("No rsources found");
      }
    } catch (error) {
      res.status(500).send("Internal server Error");
    }
  });
  
  app.delete("/api/v1/:user/deleteJournal/:id", async (req, res) => {
    
  
    try {
      const { user, id } = req.params;
      const deletedJournal =
        await sql`DELETE FROM journals WHERE id = ${id} RETURNING *`;
  
      if (deletedJournal && deletedJournal.length > 0) {
        res.status(200).json(deletedJournal[0]);
      } else {
        res.status(404).send("journal not found");
      }
    } catch (error) {
      console.error("Error deleting journal:", error);
      res.status(500).send("Internal server error");
    }
  });








// for books
app.get("/api/v1/books", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            books: ["afried", "dexter"],
        },
        
    });
});

//Get a book
app.get("/api/v1/books/:booksid", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            books: ["afried", "dexter"],
        },
        
    });
});

//Post a book
app.post("/api/v1/books", (req, res) => {
        console.log(req.body);
        res.status(201).json({
            status: "success",
            data: {
                books: ["afried", "dexter"],
            },
        });
});

//update books
app.put("/api/v1/books/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    // res.status(200).json({
    //     status: 
    // })
});


//delete book
app.delete("/api/v1/books/:id", (req, res) => {
    try { 
        const results = db.query("DELETE FROM books where id = $1", [
          req.params.id,
        ]);
        res.status(204).json({
          status: "sucess",
        });
      } catch (err) {
        console.log(err);
      }
});


//ROUTES

//Register and login routes
//app.use("/auth", require("./routes/jwtAuth."))


//get book data by Jonah
app.get('/api/books', (req, res) => {
    res.json(bookData);
  });

//CREATE A user
// app.post("/registration", async(req, res) => {
//     try {
//         console.log(req.body);
//         const { firstName, lastName, email, phone, password } = req.body;

//         const salt = await bcrypt.genSalt(10);

//         const newRegistration = await pool.query(
//             "INSERT INTO users (firstName, lastName, email, phone, password) VALUES($1, $2, $3, $4, $5)",
//              [firstName, lastName, email, phone, password]
//              );
//              res.json(newRegistration);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// //Create the db tables for the system
// app.get("/create-tables", async (req, res) => {
//     try {
//         await pool.query(`CREATE TABLE users(
//             user_id SERIAL PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             confirm_password VARCHAR(255) NOT NULL,
//             date_created DEFAULT NOW()
//         )`);
    
//         res.json("Tables created successfully")
//     } catch (error) {
//         console.log(error.message)
//     }
// })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
