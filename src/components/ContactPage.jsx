import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Back to Home button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
      >
        Back to Home
      </button>

      {/* Main content area */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="bg-black text-white p-8 rounded-lg w-full max-w-md text-center">
          <h2 className="text-2xl mb-4">Contact Me</h2>
          <ul className="list-none space-y-4">
            <li>
              <span className="font-bold">Email:</span> <a href="mailto:daniele.capa@gmail.com" className="text-blue-400 hover:underline">daniele.capa@gmail.com</a>
            </li>
            <li>
              <span className="font-bold">GitHub:</span> <a href="https://github.com/dancap82/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">github.com/dancap82/</a>
            </li>
            <li>
              <span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/danielecapaccetti/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/danielecapaccetti/</a>
            </li>
            {/* Add more contact information as needed */}
          </ul>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-gray-500 text-right py-4 pr-4">
        <p>&copy; 2024 Daniele Capaccetti. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactPage;