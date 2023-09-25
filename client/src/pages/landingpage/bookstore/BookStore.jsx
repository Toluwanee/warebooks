import React, { useState, useEffect } from 'react';
import Books from '../../../components/books/Books'

const BookStore = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Bookstore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <Books key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookStore;
