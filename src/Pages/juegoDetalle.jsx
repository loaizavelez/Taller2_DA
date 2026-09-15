import React from 'react';
import Navbar from '../Componentes/Navbar';
import { Link } from 'react-router-dom';

export default function JuegoDetalle() {
  const creadoresPrincipales = ['@JhonHelldiver', '@BugOnAHelldiverSuit', '@FristianoRonaldo'];
  const creadoresSecundarios = ['@ToxicPlayer', '@HealerMain', '@TankPro'];

  return (
    <div className="min-h-screen bg-[#141922] text-white font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-10 py-8">
        <Link to="/juegos" className="flex items-center gap-3 text-2xl font-bold mb-8 text-white hover:text-gray-300 transition group cursor-pointer w-fit">
          <div className="p-2 bg-[#222a37] rounded-full border border-gray-700/50 group-hover:bg-[#2c3646] transition duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </div>
          Overwatch
        </Link>

        {/* Contenedor Principal de las 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Columna 1: Portada del Juego (ARREGLADA) */}
          <div className="md:col-span-3">
            {/* Cambiamos aspect-[3/4] por h-full y min-h-[350px] */}
            <div className="w-full h-full min-h-[350px] bg-[#222a37] rounded-xl relative overflow-hidden flex flex-col items-center justify-center group border border-gray-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className="text-gray-500 font-semibold mt-4 text-sm tracking-wide">PORTADA</span>
            </div>
          </div>

          {/* Columna 2: CREADORES DESTACADOS */}
          <div className="md:col-span-4 flex flex-col">
            <div className="bg-[#222a37] rounded-xl p-6 flex-1 shadow-lg shadow-black/10 h-full">
              <h3 className="text-sm font-black mb-6 text-white uppercase tracking-widest">Creadores destacados.</h3>
              
              <div className="space-y-5 mb-8">
                {creadoresPrincipales.map((nombre, i) => (
                  <div key={i} className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-[#141922] flex items-center justify-center group-hover:ring-2 ring-[#d92759] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 group-hover:text-[#d92759] transition-colors duration-300">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-bold tracking-wide group-hover:text-white transition-colors duration-300">
                      {nombre}
                    </span>
                  </div>
                ))}
              </div>
              
              <hr className="border-gray-700/30 mb-6" />
              
              <div className="space-y-4">
                {creadoresSecundarios.map((nombre, i) => (
                  <div key={i} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-7 h-7 rounded-full bg-[#141922] flex items-center justify-center group-hover:ring-1 ring-[#d92759] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#d92759] transition-colors duration-300">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-400 font-semibold text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {nombre}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna 3: Reproductor de Video */}
          <div className="md:col-span-5">
            <div className="w-full h-full min-h-[350px] bg-[#222a37] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#283242] transition duration-300 shadow-lg shadow-black/10 group border border-gray-800/50">
              <svg className="w-20 h-20 text-gray-500 group-hover:text-[#d92759] group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
              </svg>
              <span className="mt-4 text-gray-500 font-bold tracking-wider group-hover:text-[#d92759] transition-colors duration-300">REPRODUCIR CLIP</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}