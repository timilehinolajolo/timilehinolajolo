import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-5 h-[60px] bg-transparent relative z-50">
      <div className="text-3xl font-cursive text-white">Welcome</div>

      <nav className={`fixed md:static top-0 ${isOpen ? 'left-0' : '-left-full'} w-[60%] md:w-auto h-full md:h-auto bg-black md:bg-transparent transition-all duration-300 z-40`}>
        <ul className="flex flex-col md:flex-row gap-8 p-10 md:p-0 items-center">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="hidden md:block text-gray-600">|</li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className="hidden md:block text-gray-600">|</li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li className="hidden md:block text-gray-600">|</li>
          <li><Link to="/certifications" onClick={() => setIsOpen(false)}>Certifications</Link></li>
          <li className="hidden md:block text-gray-600">|</li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      <div className="md:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </div>
    </header>
  );
};

export default Navbar;