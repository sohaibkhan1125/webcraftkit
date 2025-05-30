'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageToBase64Converter = () => {
  const [imageFile, setImageFile] = useState(null); // Selected image file
  const [base64String, setBase64String] = useState(''); // Base64 string output

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64String(reader.result); // Set the Base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL
      setImageFile(file);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(base64String).then(() => {
      alert('Base64 string copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Image to Base64 Converter
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {base64String && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Base64 String</h2>
              <textarea
                value={base64String}
                readOnly
                rows="5"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Base64 String
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImageToBase64Converter;


