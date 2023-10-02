import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sql from "./db.js";
import bookData  from './data/BookData.js';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';

const connectionString = 'postgres://judeohiani:80piHgOFthEd@ep-mute-mountain-00610853.us-east-2.aws.neon.tech/uploaded_books';

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false,
  },
});


const app = express();
const port = process.env.SERVER_PORT || 5001;

//middleware
app.use(cors({origin:["http://localhost:5173", 'http://localhost:5174']}));
app.use(express.json());

app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const Book = sequelize.define('books', {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  overview: DataTypes.STRING,
  file_path: DataTypes.STRING,
  cover_path: DataTypes.STRING,
});

app.post('/api/upload-book', upload.fields([{ name: 'file' }, { name: 'bookCover' }]), async (req, res) => {
  const { bookTitle, authorName, bookOverview } = req.body;
  const file = req.files.file[0];
  const bookCover = req.files.bookCover[0];

  console.log("I am a warrior");
  console.log(file);
  console.log(bookCover);
  console.log(bookTitle);

  try {
     // Construct file paths
     const file_path = path.join(__dirname, '..', 'uploads', file.filename);
     const cover_path = path.join(__dirname, '..', 'uploads', bookCover.filename); // Use __dirname to get the correct path

    await sequelize.sync();
    await Book.create({
      title: bookTitle,
      author: authorName,
      overview: bookOverview,
      file_path,
      cover_path,
    });

    res.status(201).send('Book uploaded successfully');
  } catch (error) {
    console.error('Error uploading book:', error);
    res.status(500).send('Error uploading book');
  }
});

app.get('/api/my-books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Error fetching books');
  }
});

app.get('/api/books', (req, res) => {
    res.json(bookData);
  });


//Register
app.post("/api/v1/register", async (req, res) => {
    const { firstName, lastName, phone, email, password } =
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
        INSERT INTO users (firstName, lastName, phone, email, password)
        VALUES (${firstName}, ${lastName}, ${phone}, ${email}, ${hashedPassword})
        RETURNING *`;
  
      if (response) {
        res.status(201).send(response);
      } else {
        res.status(500).send("Internal server Error");
      }
    } catch (error) {
      // console.error("Error inserting user:", error);
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server Error" }); // Respond with JSON
    }
  });

//Login
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
                id: emailCheck[0].id,
                firstname: emailCheck[0].firstname,
                lastname: emailCheck[0].lastname,
                phone: emailCheck[0].phone,
                email: emailCheck[0].email,
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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
