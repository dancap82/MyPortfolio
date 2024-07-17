import React from 'react';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../assets/imgs/Logo.jpg';
import ProjectImage1 from '../assets/imgs/ProjectImage1.jpg';
import ProjectImage2 from '../assets/imgs/ProjectImage2.jpg';
import ProjectImage3 from '../assets/imgs/ProjectImage3.jpg';
import '../custom-slick.css'; // Ensure the path is correct

function ProjectsPage() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const projects = [
    { id: 1, image: ProjectImage1, link: '/project1', title: 'Project 1' },
    { id: 2, image: ProjectImage2, link: '/project2', title: 'Project 2' },
    { id: 3, image: ProjectImage3, link: '/project3', title: 'Project 3' },
    // Add more projects as needed
  ];

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
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Upper div with background image */}
        <div className="w-full max-w-lg h-64 mb-4" style={{
            backgroundImage: `url(${Logo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
        </div>
        
        {/* Lower div with carousel */}
        <div className="w-full max-w-4xl">
          <Slider {...settings}>
            {projects.map(project => (
              <div key={project.id} className="p-4">
                <Link to={project.link}>
                  <div className="relative bg-gray-800 w-full h-64 flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                    <span className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2">{project.title}</span>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-gray-500 text-right py-4 pr-4">
        <p>&copy; 2024 Daniele Capaccetti. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ProjectsPage;