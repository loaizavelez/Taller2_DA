import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full bg-[#141d26]/90 backdrop-blur-md border-b border-[#243447] sticky top-0 z-50 px-6 lg:px-16 py-4 flex items-center justify-between">
      {/* Brand / Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-lg bg-[#c51f5d] flex items-center justify-center font-black text-xl text-white shadow-lg shadow-[#c51f5d]/30 group-hover:scale-105 transition duration-200">
          C
        </div>
        <span className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          CLIPPED
        </span>
      </Link>

      {/* Navegación y Enlaces */}
      <nav className="flex items-center gap-8 text-sm font-medium">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => 
            isActive 
              ? "text-white font-semibold border-b-2 border-[#c51f5d] pb-1" 
              : "text-gray-300 hover:text-white transition duration-200"
          }
        >
          Inicio
        </NavLink>
        
        <NavLink 
          to="/juegos" 
          className={({ isActive }) => 
            isActive 
              ? "text-white font-semibold border-b-2 border-[#c51f5d] pb-1" 
              : "text-gray-300 hover:text-white transition duration-200"
          }
        >
          Juegos
        </NavLink>

        <a 
          href="#login" 
          className="text-white border border-[#243447] bg-[#243447]/60 hover:bg-[#243447] hover:border-[#c51f5d] px-4 py-2 rounded-lg transition duration-200 shadow-sm"
        >
          Iniciar sesión
        </a>
      </nav>
    </header>
  );
}