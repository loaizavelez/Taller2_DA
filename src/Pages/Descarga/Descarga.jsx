import Navbar from '../../Componentes/Navbar';

export default function Descarga() {
  const pasos = [
    { numero: 1, titulo: "Descarga Clipped", descripcion: "Obtén el instalador oficial para Windows de manera rápida y segura." },
    { numero: 2, titulo: "Crea una cuenta", descripcion: "Regístrate en segundos para sincronizar tus clips en la nube." },
    { numero: 3, titulo: "Juega y comparte", descripcion: "Presiona tu hotkey en el juego, graba la jugada y compártela." }
  ];

  return (
    <div className="min-h-screen bg-[#141d26] text-white font-sans flex flex-col selection:bg-[#c51f5d] selection:text-white">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Contenido Principal */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Columna Izquierda: Pasos 1, 2, 3 */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Comienza en <span className="text-[#c51f5d]">3 sencillos pasos</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Configura Clipped en menos de dos minutos y empieza a capturar tus mejores momentos.
            </p>
          </div>

          <div className="space-y-6">
            {pasos.map((paso) => (
              <div 
                key={paso.numero} 
                className="flex items-start gap-5 p-5 bg-[#243447]/60 rounded-2xl border border-[#243447] hover:border-[#c51f5d]/50 transition duration-300 shadow-lg"
              >
                {/* Círculo con Número */}
                <div className="w-14 h-14 rounded-full bg-[#c51f5d] text-white flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-md shadow-[#c51f5d]/30">
                  {paso.numero}
                </div>
                
                {/* Texto del paso */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{paso.titulo}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{paso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Vista previa GIF y Botón Descargar */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-8">
          
          {/* Tarjeta de previsualización (GIF) */}
          <div className="w-full max-w-lg aspect-video bg-[#243447] rounded-2xl border-2 border-[#243447] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center group hover:border-[#c51f5d] transition duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#243447] via-[#141d26] to-[#243447] opacity-80"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#c51f5d]/20 border border-[#c51f5d] flex items-center justify-center text-[#c51f5d] group-hover:scale-110 transition duration-300">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase font-mono">
                * GIF *
              </span>
            </div>
          </div>

          {/* Botón Principal de Descarga */}
          <button className="w-full max-w-lg bg-[#c51f5d] hover:bg-[#d82a6f] active:scale-95 text-white font-black py-5 px-8 rounded-2xl text-xl shadow-xl shadow-[#c51f5d]/30 hover:shadow-[#c51f5d]/50 transition duration-300 cursor-pointer flex items-center justify-center gap-4">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar
          </button>

        </div>

      </main>

      {/* 3. Footer */}
      <footer className="mt-auto border-t border-[#243447] bg-[#141d26] py-8 px-6 text-center text-sm text-gray-400">
        <p>© 2026 Clipped. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}