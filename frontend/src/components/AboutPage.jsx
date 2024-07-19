import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutImage from '../assets/imgs/AboutImage.jpg'; // Replace with your image path

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between">
      {/* Back to Home button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
      >
        Back to Home
      </button>

      {/* Main content area */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="flex flex-col md:flex-row bg-black w-full max-w-4xl rounded-lg overflow-hidden">
          {/* Image section */}
          <div className="w-full md:w-1/2">
            <img src={AboutImage} alt="About" className="object-cover h-full w-full" />
          </div>
          
          {/* Text section */}
          <div className="w-full md:w-1/2 p-4 overflow-y-auto text-white">
            <h2 className="text-2xl mb-4">About Me</h2>
            <p className="mb-2">
            My name is Daniele Capaccetti, and I recently graduated from a comprehensive full stack web development bootcamp, where I built a strong foundation in HTML5, CSS3, and responsive web design. I excel in frontend programming with JavaScript and React, and possess robust backend development skills with Node.js and Express. My expertise extends to version control systems like Git and GitHub, and I have experience with both SQL and NoSQL databases. I am proficient in creating and consuming RESTful APIs, performing unit testing, and utilizing Agile tools and methodologies to ensure efficient and effective development workflows. In addition to my development skills, I bring 13 years of experience as a Quality Assurance (QA) professional, specializing in linguistic and functionality testing, and integrating advanced automation strategies to enhance product quality. This unique combination of web development and QA expertise enables me to deliver high-quality, comprehensive solutions in dynamic environments.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-gray-500 text-right py-4 pr-4">
        <p>&copy; 2024 Daniele Capaccetti. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;