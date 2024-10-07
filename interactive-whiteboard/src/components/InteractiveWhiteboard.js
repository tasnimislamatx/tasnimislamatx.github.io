import React, { useState } from 'react';
import { X } from 'lucide-react';

const InteractiveWhiteboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Interactive Whiteboard</h1>
        
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="border border-gray-300 p-4 cursor-pointer" 
            onClick={() => handleImageClick('highNotes')}
          >
            <h2 className="text-xl mb-2">High Notes</h2>
            <div className="h-32 bg-gray-100"></div>
          </div>
          
          <div 
            className="border border-gray-300 p-4 cursor-pointer"
            onClick={() => handleImageClick('projectPortfolio')}
          >
            <h2 className="text-xl mb-2">Project Portfolio</h2>
            <div className="h-32 bg-gray-100"></div>
          </div>
          
          <div 
            className="border border-gray-300 p-4 cursor-pointer"
            onClick={() => handleImageClick('photos')}
          >
            <h2 className="text-xl mb-2">Photos</h2>
            <div className="h-32 bg-gray-100"></div>
          </div>
          
          <div 
            className="border border-gray-300 p-4 cursor-pointer"
            onClick={() => handleImageClick('discussionBoard')}
          >
            <h2 className="text-xl mb-2">Discussion Board</h2>
            <div className="h-32 bg-gray-100"></div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            onClick={closeFullscreen}
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full p-8">
            <h2 className="text-3xl font-bold mb-6">{selectedImage}</h2>
            <div className="h-96 bg-gray-100"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveWhiteboard;