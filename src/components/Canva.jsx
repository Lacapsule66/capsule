import React, { useEffect } from 'react';
import Layout from './Mep';

const CanvasShapes = () => {



    // Call the canvasShape function here or wherever it should be triggered
    // Example: canvasShape('canvas-shapes', { ... });



  return (
    <><Layout /><div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
          <div class="relative w-full max-w-lg">
              <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              {/* <div class="absolute -bottom-1 left-12 w-96 h-96 bg-pink-800 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-4000"></div> */}


          </div>
      </div></>
  
  );
};

export default CanvasShapes;