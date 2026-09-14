
import React from 'react';
import Navbar from '../Componentes/Navbar';

export default function JuegosInicio() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-white font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Sección: Lo mejor de la semana */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Lo mejor de la semana</h2>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {/* Tarjeta #1 Destacada */}
            <div className="w-48 flex-shrink-0 relative cursor-pointer">
              <div className="aspect-[3/4] bg-gray-800 rounded-lg border-2 border-gray-600 relative">
                <span className="absolute -top-3 -right-3 text-red-500 font-black text-3xl drop-shadow-md">#1</span>
              </div>
            </div>
            {/* Tarjetas Restantes */}
            {[2, 3, 4, 5].map((num) => (
              <div key={num} className="w-48 flex-shrink-0 relative cursor-pointer">
                <div className="aspect-[3/4] bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-500 transition"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Fin de semana en overwatch */}
        <section>
          <h2 className="text-xl font-bold mb-6">Fin de semana en overwatch</h2>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-64 flex-shrink-0 cursor-pointer">
                <div className="aspect-video bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-500 transition"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}