import { useState, useEffect } from "react";
import Books from "../../../pages/landingpage/bookstore/BookStore";

const BookStoreGrid = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:5001/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="container mx-auto mt-5 ml-4 mt-6 overflow-auto">
      <h1 className="text-3xl font-semibold mb-4">Bookstore</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <Books key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className="bg-yellow-800 rounded-sm p-20 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}

export default BookStoreGrid;
