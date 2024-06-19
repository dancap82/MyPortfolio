import React from 'react';

function ContactPage() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        {/* Upper div */}
        <div className="bg-red-500 h-1/4 w-2/4 mb-2"></div>
        
        {/* Lower div */}
        <div className="flex w-2/4">
          {/* Left sub-div */}
          <div className="bg-blue-500 w-2/4 h-1/8 mr-2"></div>
          {/* Middle sub-div */}
          <div className="bg-green-500 w-2/4 h-1/8 mr-2"></div>
          {/* Right sub-div */}
          <div className="bg-yellow-500 w-2/4 h-1/8"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;