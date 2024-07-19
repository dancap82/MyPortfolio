import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/imgs/Logo.jpg';
import Buttons from '../assets/imgs/Buttons.jpg';

function HomePage() {
  const buttonStyle = {
    backgroundImage: `url(${Buttons})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      {/* Main content area */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Upper div with background image */}
        <div className="w-full max-w-lg h-64 mb-4" style={{
            backgroundImage: `url(${Logo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
        </div>
        
        {/* Lower div */}
        <div className="flex justify-around w-full max-w-4xl h-16">
          {/* Sub-divs */}
          <Link to="/about"
            className="relative bg-gray-800 w-1/3 flex justify-center items-end mx-1 hover:bg-gray-700 transition duration-300"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundBlendMode = 'multiply'}
            onMouseLeave={(e) => e.target.style.backgroundBlendMode = 'normal'}
            onClick={(e) => e.target.style.filter = 'brightness(90%)'}
          >
            <span className="text-black tracking-widest">ABOUT ME</span>
          </Link>
          <Link to="/projects"
            className="relative bg-gray-800 w-1/3 flex justify-center items-end mx-1 hover:bg-gray-700 transition duration-300"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundBlendMode = 'multiply'}
            onMouseLeave={(e) => e.target.style.backgroundBlendMode = 'normal'}
            onClick={(e) => e.target.style.filter = 'brightness(90%)'}
          >
            <span className="text-black tracking-widest">PROJECTS</span>
          </Link>
          <Link to="/contact"
            className="relative bg-gray-800 w-1/3 flex justify-center items-end mx-1 hover:bg-gray-700 transition duration-300"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundBlendMode = 'multiply'}
            onMouseLeave={(e) => e.target.style.backgroundBlendMode = 'normal'}
            onClick={(e) => e.target.style.filter = 'brightness(90%)'}
          >
            <span className="text-black tracking-widest">CONTACTS</span>
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-gray-500 text-right py-4 pr-4">
        <p>&copy; 2024 Daniele Capaccetti. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;