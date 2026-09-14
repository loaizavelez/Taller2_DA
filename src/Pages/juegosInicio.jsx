import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar';

export default function JuegosInicio() {
  return (
    <div className="min-h-screen bg-[#141d26] text-white font-sans flex flex-col selection:bg-[#c51f5d] selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-8 py-8 flex-1 w-full">
        {/* Sección: Lo mejor de la semana */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Lo mejor de la semana</h2>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            
            {/* Tarjeta #1 Destacada */}
            <Link to="/juegos/overwatch" className="w-48 flex-shrink-0 relative group">
              <div className="aspect-[3/4] bg-[#243447] rounded-xl border-2 border-[#c51f5d] relative overflow-hidden transition-transform duration-200 group-hover:scale-105 shadow-lg">
                <span className="absolute top-0 right-0 bg-[#c51f5d] text-white font-black text-sm px-2.5 py-1 rounded-bl-lg shadow-md">
                  #1
                </span>
              </div>
            </Link>

            {/* Tarjetas Restantes */}
            {[2, 3, 4, 5].map((num) => (
              <Link key={num} to="/juegos/overwatch" className="w-48 flex-shrink-0 relative group">
                <div className="aspect-[3/4] bg-[#243447] rounded-xl border border-gray-700/60 hover:border-[#c51f5d] transition-all duration-200 group-hover:scale-105 shadow-md"></div>
              </Link>
            ))}

          </div>
        </section>

        {/* Sección: Fin de semana en overwatch */}
        <section>
          <h2 className="text-xl font-bold mb-6 tracking-tight">Fin de semana en overwatch</h2>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {[1, 2, 3, 4].map((num) => (
              <Link key={num} to="/juegos/overwatch" className="w-64 flex-shrink-0 group">
                <div className="aspect-video bg-[#243447] rounded-xl border border-gray-700/60 hover:border-[#c51f5d] transition-all duration-200 group-hover:scale-105 shadow-md"></div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#243447] bg-[#141d26] py-8 px-6 text-center text-sm text-gray-400">
        <p>© 2026 Clipped. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}