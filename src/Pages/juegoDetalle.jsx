import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar';

export default function JuegoDetalle() {
  return (
    <div className="min-h-screen bg-[#141d26] text-white font-sans flex flex-col selection:bg-[#c51f5d] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-8 py-6 flex-1 w-full">
        {/* Botón de Regreso a /juegos */}
        <Link 
          to="/juegos" 
          className="inline-flex items-center gap-3 text-2xl font-bold mb-8 text-white hover:text-[#c51f5d] transition group cursor-pointer"
        >
          <div className="p-2 bg-[#243447] rounded-full border border-[#243447] group-hover:border-[#c51f5d] transition duration-300 flex items-center justify-center shadow-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          Overwatch
        </Link>

        {/* Contenedor Principal a 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Columna 1: Portada del Juego (3/12) */}
          <div className="md:col-span-3">
            <div className="w-full aspect-[3/4] bg-[#243447] rounded-xl border border-gray-700/60 hover:border-[#c51f5d] transition relative overflow-hidden shadow-lg">
              <svg className="absolute inset-0 w-full h-full text-[#141d26] pointer-events-none opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1.5"></line>
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1.5"></line>
              </svg>
            </div>
          </div>

          {/* Columna 2: Creadores Destacados (4/12) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-[#243447] rounded-xl border border-gray-700/60 p-6 flex-1 shadow-lg">
              <h3 className="text-sm font-bold mb-6 text-gray-200 uppercase tracking-wider">Creadores destacados.</h3>
              
              {/* Lista de creadores */}
              <div className="space-y-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#141d26] border border-gray-600/60"></div>
                    <div className="w-32 h-2 bg-[#141d26] rounded"></div>
                  </div>
                ))}
              </div>
              
              <hr className="border-[#141d26] mb-6" />
              
              {/* Lista secundaria inferior */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#141d26] border border-gray-600/60"></div>
                    <div className="w-24 h-1.5 bg-[#141d26] rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 3: Reproductor de Video (5/12) */}
          <div className="md:col-span-5">
            <div className="w-full h-full min-h-[350px] bg-[#243447] rounded-xl border border-gray-700/60 hover:border-[#c51f5d] transition flex items-center justify-center cursor-pointer group shadow-lg">
              <div className="w-16 h-16 rounded-full bg-[#c51f5d] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#243447] bg-[#141d26] py-8 px-6 text-center text-sm text-gray-400">
        <p>© 2026 Clipped. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}