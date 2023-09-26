const Books = ({ book }) => {
  return (
    <div className="flex flex-col items-center border p-2 m-2 rounded-lg">
      <img src={book.img} alt={book.title} className="max-h-48 mx-auto" />
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">Author: {book.Author}</p>
      <div className="flex justify-around mt-4">
        <p className="text-gray-800">Discount: ₦{book.Discount}</p>
        <p className="text-gray-400 line-through">Price: ₦{book.Price}</p>
      </div>
      <button className="bg-orange-500 border rounded-lg pt-2 pb-2 pr-4 pl-4 buynow">
        Buy Now{" "}
      </button>
    </div>
  );
};

export default Books;
