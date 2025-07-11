import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500">AnaSocial</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-gray-600 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">3</span>
          </button>
        </div>
        
        <div className="relative">
          <button className="text-gray-600 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">5</span>
          </button>
        </div>
        
        <div className="relative">
          <Link to="/profile" className="block">
            <img 
              src="https://via.placeholder.com/40" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
