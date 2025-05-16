import React from 'react';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">InmobiliApp</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Inicio</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;