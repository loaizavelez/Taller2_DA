import React from 'react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-[#11151c]">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        <span className="text-xl font-bold tracking-widest uppercase">Clipped</span>
      </div>
      <nav className="flex gap-6 text-sm font-medium">
        <a href="#" className="text-gray-400 hover:text-white transition">inicio</a>
        <a href="#" className="text-white border-b-2 border-white pb-1">Juegos</a>
      </nav>
    </header>
  );
}