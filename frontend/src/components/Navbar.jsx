import React, { useState } from 'react';
import {Menu, X} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../assets/data';



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/50 shadow-md fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex items-center justify-between container h-16">
        <Link to="/" className="text-2xl font-bold text-sky-700 select-none">
          KRBF
        </Link>
        
        {/* desktop nav */}
        <nav className='hidden md:flex gap-4 justify-between text-center'>
          {navItems.map(link => (
            <NavLink
              key={link.id}
              to={link.href}
              className="text-gray-700 hover:text-sky-700 transition-colors duration-200 font-medium">
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'>
          {isMenuOpen ? <X className='h-8 w-8' /> : <Menu className='h-8 w-8' />}
        </button>
      </div>
      {/* mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-100 ">
          <nav className="flex flex-col space-y-2 ">
            {navItems.map(link => (
              <NavLink
                key={link.id}
                to={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
      
    </header>
  );
}
