import React from 'react';
import { FaLaptopCode, FaProjectDiagram, FaFileAlt, FaGlobe, FaCogs, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Add this import

const Home = () => {
  return (
    <div className="text-center bg-gray-100 flex flex-col h-screen overflow-hidden">
      <div className="flex-[0.8] border-2 border-red-500">
        <h1 className="text-gray-800 text-4xl">Welcome to Our Website</h1>
        <p className="text-gray-600 text-lg">This is the default home page. Please explore our features and enjoy your stay!</p>
      </div>
      <div className="h-4"></div> {/* Gap between top and bottom sections */}
      <div className="flex-[0.8] grid grid-cols-6 gap-4">
        <div id="web_design" className="flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div id="web_design_row1" className="w-16 h-16 rounded-full bg-gradient-to-bl from-gray-200 to-gray-500 flex items-center justify-center">
              <FaLaptopCode className="text-black text-2xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            Web<br />Design
            <p className="text-xs mt-2 text-blue-900">Creating visually appealing and user-friendly websites.</p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <Link to="/web-design" className="absolute bottom-2 bg-gradient-to-r from-blue-900 to-gray-600 text-white py-1 px-3 rounded">Know More</Link>
          </div>
        </div>
        <div id="API_dev" className="flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div id="API_dev_row1" className="w-16 h-16 rounded-full bg-gradient-to-bl from-gray-100 to-gray-400 flex items-center justify-center">
              <FaProjectDiagram className="text-black text-2xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            Portfolio<br />Management
            <p className="text-xs mt-2 text-blue-900">Managing and showcasing your projects effectively.</p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <Link to="/portfolio-management" className="absolute bottom-2 bg-gradient-to-r from-blue-900 to-gray-600 text-white py-1 px-3 rounded">Know More</Link>
          </div>
        </div>
        <div id="content" className="flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div id="content_row1" className="w-16 h-16 rounded-full bg-gradient-to-bl from-gray-300 to-gray-600 flex items-center justify-center">
              <FaFileAlt className="text-black text-2xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            Content<br />Management
            <p className="text-xs mt-2 text-blue-900">Organizing and maintaining your digital content.</p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <Link to="/content-management" className="absolute bottom-2 bg-gradient-to-l from-blue-900 to-gray-600 text-white py-1 px-3 rounded">Know More</Link>
          </div>
        </div>
        <div id="real_web" className="flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div id="real_web_row1" className="w-16 h-16 rounded-full bg-gradient-to-bl from-gray-200 to-gray-400 flex items-center justify-center">
              <FaGlobe className="text-black text-2xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            Real Time<br />Web Application
            <p className="text-xs mt-2 text-blue-900">Developing dynamic and interactive web applications.</p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <Link to="/real-time-web-application" className="absolute bottom-2 bg-gradient-to-l from-blue-900 to-gray-600 text-white py-1 px-3 rounded">Know More</Link>
          </div>
        </div>
        <div id="ERP" className="flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div id="ERP_row1" className="w-16 h-16 rounded-full bg-gradient-to-bl from-gray-200 to-gray-500 flex items-center justify-center">
              <FaCogs className="text-black text-2xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            ERP
            <p className="text-xs mt-2 text-blue-900">Implementing enterprise resource planning solutions.</p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <Link to="/erp" className="absolute bottom-2 bg-gradient-to-bl from-blue-900 to-gray-600 text-white py-1 px-3 rounded">Know More</Link>
          </div>
        </div>
        <div id="portfolio" className="flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div id="portfolio_row1" className="w-16 h-16 rounded-full bg-gradient-to-bl from-gray-100 to-gray-400 flex items-center justify-center">
              <FaCode className="text-black text-2xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            API<br />Development
            <p className="text-xs mt-2 text-blue-900">Building robust and scalable APIs for your applications.</p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <Link to="/api-development" className="absolute bottom-2 bg-gradient-to-bl from-blue-900 to-gray-600 text-white py-1 px-3 rounded">Know More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
