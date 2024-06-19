import React from 'react';
import Logo from '../assets/imgs/Logo.jpg'; // Adjust the path as per your project structure

function HomePage() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        {/* Upper div with background image */}
        <div className="bg-red-500 h-48 w-96 mb-2" style={{
            backgroundImage: `url(${Logo})`,
            backgroundSize: 'cover', // Adjusted to cover
            backgroundPosition: 'center',
          }}>
        </div>
        
        {/* Lower div */}
        <div className="flex w-2/4 h-1/2">
          {/* Left sub-div */}
          <div className="bg-blue-500 w-1/3 h-full mr-2">b</div>
          {/* Middle sub-div */}
          <div className="bg-green-500 w-1/3 h-full mr-2">c</div>
          {/* Right sub-div */}
          <div className="bg-yellow-500 w-1/3 h-full">d</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;