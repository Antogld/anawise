import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Anawise
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">Funzionalità</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">Chi siamo</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contatti</Link></li>
          </ul>
        </nav>
        
        <div className="flex space-x-4">
          <Link to="/auth/login" className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors">Accedi</Link>
          <Link to="/auth/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Registrati</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
