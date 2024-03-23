import React, { useState, useRef } from "react";

function App() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handlePlaceholderClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {image ? (
        <img src={image} alt="Dropped" className="w-64 h-64" />
      ) : (
        <div
          className="border-4 border-dashed border-gray-400 rounded-lg p-8 cursor-pointer"
          onClick={handlePlaceholderClick}
        >
          <p className="text-gray-600">Drag & drop your image here</p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileInputChange}
          />
        </div>
      )}
    </div>
  );
}

export default App;
