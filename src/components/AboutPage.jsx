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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. 
            </p>
            <p className="mb-2">
              Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
            </p>
            <p className="mb-2">
              Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. 
            </p>
            <p className="mb-2">
              Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p className="mb-2">
              Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
            </p>
            {/* Add more text as needed */}
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