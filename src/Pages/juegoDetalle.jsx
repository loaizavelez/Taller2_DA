import React from 'react';
import Navbar from '../Componentes/Navbar';

export default function JuegoDetalle() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-white font-sans">
      {/* Reutilizamos el Navbar que ya creaste */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-6">
      {/* Botón de Regreso Estético */}
        <button className="flex items-center gap-3 text-2xl font-bold mb-8 text-white hover:text-gray-300 transition group cursor-pointer">
          <div className="p-2 bg-gray-800/50 rounded-full border border-gray-700 group-hover:bg-gray-700 transition duration-300 flex items-center justify-center">
            {/* Icono SVG de flecha izquierda */}
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
        </button>

        {/* Contenedor Principal a 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Columna 1: Portada del Juego (3/12) */}
          <div className="md:col-span-3">
            <div className="w-full aspect-[3/4] bg-[#1a1f26] rounded-lg border border-gray-700 relative overflow-hidden">
                {/* La X del wireframe */}
                <svg className="absolute inset-0 w-full h-full text-gray-700 pointer-events-none opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1"></line>
                    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1"></line>
                </svg>
            </div>
          </div>

          {/* Columna 2: Creadores Destacados (4/12) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-[#1a1f26] rounded-lg border border-gray-700 p-5 flex-1">
              <h3 className="text-sm font-bold mb-5">Creadores destacados.</h3>
              
              {/* Lista de creadores */}
              <div className="space-y-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600"></div>
                    <div className="w-32 h-1 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
              
              <hr className="border-gray-800 mb-5" />
              
              {/* Lista secundaria inferior */}
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-600"></div>
                    <div className="w-24 h-1 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 3: Reproductor de Video (5/12) */}
          <div className="md:col-span-5">
            <div className="w-full h-full min-h-[350px] bg-[#1a1f26] rounded-lg border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition">
              {/* Icono de Play */}
              <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}