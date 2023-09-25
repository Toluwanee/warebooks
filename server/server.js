const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Import book data
const bookData = require('./data/BookData');

app.use(express.json());

app.get('/api/books', (req, res) => {
  res.json(bookData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
