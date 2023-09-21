import React, { useState } from 'react';

function PublishPage() {
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [file, setFile] = useState(null);

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleFileChange = (e) => {
    // You can handle file uploads here and store the file in your state
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePublish = () => {
    // Handle publishing logic here, e.g., sending data to your backend
    console.log('Book Title:', bookTitle);
    console.log('Author Name:', authorName);
    console.log('File:', file);
    // You can make an API request to upload the book and its details to your server.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Publish Your Book</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Book Title</label>
          <input
            type="text"
            value={bookTitle}
            onChange={handleTitleChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Author Name</label>
          <input
            type="text"
            value={authorName}
            onChange={handleAuthorChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Book (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          onClick={handlePublish}
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default PublishPage;
