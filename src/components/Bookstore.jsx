const sampleBooks = [
  { title: 'Book 1', author: 'Author 1', price: 10.99 },
  { title: 'Book 2', author: 'Author 2', price: 12.99 },
  // Add more sample books...
];

function Bookstore() {
  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">Bookstore</h2>
      <div className="grid grid-cols-2 gap-4">
        {sampleBooks.map((book, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p>By {book.author}</p>
            <p className="mt-2">${book.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 text-white px-2 py-1 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookstore;
