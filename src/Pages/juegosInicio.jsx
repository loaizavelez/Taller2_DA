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
          
          {/* EL ARREGLO ESTÁ AQUÍ: Añadimos py-4 y px-2 para dar espacio, y -mx-2 para mantener la alineación */}
          <div className="flex gap-6 overflow-x-auto py-4 px-2 -mx-2" style={{ scrollbarWidth: 'none' }}>
            
            {/* Tarjeta #1 Destacada */}
            <Link to="/juegos/overwatch" className="w-52 flex-shrink-0 cursor-pointer group block">
              <div className="aspect-[3/4] bg-[#222a37] rounded-xl group-hover:ring-2 ring-gray-400 transition duration-300 relative w-full h-full">
                {/* Agregamos z-10 para que el número #1 siempre esté por encima de todo */}
                <span className="absolute -top-3 -right-3 text-[#d92759] font-black text-4xl drop-shadow-lg z-10">#1</span>
              </div>
            </Link>
            
            {/* Tarjetas Restantes */}
            {[2, 3, 4, 5].map((num) => (
              <div key={num} className="w-52 flex-shrink-0 cursor-pointer group">
                <div className="aspect-[3/4] bg-[#222a37] rounded-xl group-hover:ring-2 ring-gray-400 transition duration-300 w-full h-full"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Fin de semana en overwatch */}
        <section>
          <h2 className="text-xl font-black mb-6 text-white tracking-wide">Fin de semana en overwatch</h2>
          
          {/* Mismo arreglo de padding para la sección inferior */}
          <div className="flex gap-6 overflow-x-auto py-4 px-2 -mx-2" style={{ scrollbarWidth: 'none' }}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-72 flex-shrink-0 cursor-pointer group">
                <div className="aspect-video bg-[#222a37] rounded-xl group-hover:ring-2 ring-gray-400 transition duration-300 w-full h-full"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}