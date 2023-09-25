// client/src/components/Books.jsx

import React from 'react';

const Books = ({ book }) => {
  return (
    <div className="border p-4 m-2 rounded-lg">
      <img src={book.img} alt={book.title} className="max-h-48 mx-auto" />
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">Author: {book.Author}</p>
      <div className="flex justify-between mt-4">
        <p className="text-gray-800">Price: ${book.Dp}</p>
        <p className="text-gray-400 line-through">MRP: ${book.Mrp}</p>
      </div>
    </div>
  );
};

export default Books;
