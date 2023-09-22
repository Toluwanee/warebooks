import { useState } from "react";

export const PublisherWorkSpace = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">Publisher Workspace</h2>
      <textarea
        className="w-full h-40 border rounded p-2"
        placeholder="Write your book content here..."
        value={content}
        onChange={handleContentChange}
      ></textarea>
    </div>
  );
};

export default PublisherWorkSpace;