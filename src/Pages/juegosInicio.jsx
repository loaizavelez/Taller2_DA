import React from 'react';
import Navbar from '../Componentes/Navbar';
import { Link } from 'react-router-dom';

export default function JuegosInicio() {
  return (
    <div className="min-h-screen bg-[#141922] text-white font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-10 py-10">
        {/* Sección: Lo mejor de la semana */}
        <section className="mb-14">
          <h2 className="text-2xl font-black mb-6 text-white tracking-wide">Lo mejor de la semana</h2>
          
          <div className="flex gap-6 overflow-x-auto py-4 px-2 -mx-2" style={{ scrollbarWidth: 'none' }}>
            
            {/* Tarjeta #1 Destacada */}
            <Link to="/juegos/overwatch" className="w-52 flex-shrink-0 cursor-pointer group block">
              <div className="aspect-[3/4] bg-[#222a37] rounded-xl group-hover:ring-2 ring-gray-400 transition duration-300 relative w-full h-full flex items-center justify-center">
                <span className="absolute -top-3 -right-3 text-[#d92759] font-black text-4xl drop-shadow-lg z-10">#1</span>
                
                {/* Icono de Play */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 group-hover:text-[#d92759] group-hover:scale-110 transition-all duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
              </div>
            </Link>
            
            {/* Tarjetas Restantes (Verticales) */}
            {[2, 3, 4, 5].map((num) => (
              <div key={num} className="w-52 flex-shrink-0 cursor-pointer group">
                <div className="aspect-[3/4] bg-[#222a37] rounded-xl group-hover:ring-2 ring-gray-400 transition duration-300 w-full h-full flex items-center justify-center">
                  
                  {/* Icono de Play */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 group-hover:text-[#d92759] group-hover:scale-110 transition-all duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Fin de semana en overwatch */}
        <section>
          <h2 className="text-xl font-black mb-6 text-white tracking-wide">Fin de semana en overwatch</h2>
          
          <div className="flex gap-6 overflow-x-auto py-4 px-2 -mx-2" style={{ scrollbarWidth: 'none' }}>
            
            {/* Tarjetas Horizontales */}
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-72 flex-shrink-0 cursor-pointer group">
                <div className="aspect-video bg-[#222a37] rounded-xl group-hover:ring-2 ring-gray-400 transition duration-300 w-full h-full flex flex-col items-center justify-center gap-2">
                  
                  {/* Icono de Cámara de Video */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-[#d92759] group-hover:scale-110 transition-all duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <span className="text-sm text-gray-500 font-semibold group-hover:text-[#d92759] transition-colors duration-300">Ver clip</span>
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}