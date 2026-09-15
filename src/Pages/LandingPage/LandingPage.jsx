import { Link } from 'react-router-dom';
import Navbar from '../../Componentes/Navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#141d26] text-white font-sans flex flex-col selection:bg-[#c51f5d] selection:text-white">
      
      {/* Navbar Reutilizable */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Izquierda: Texto, Descripción y CTA */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Graba y comparte <br />
            <span className="text-[#c51f5d] drop-shadow-[0_0_20px_rgba(197,31,93,0.4)]">
              tus clips
            </span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Captura de forma automática tus mejores jugadas en alta calidad sin perder rendimiento. Edita, recorta y comparte con tus amigos o la comunidad en un solo clic.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              to="/descargar" 
              className="bg-[#c51f5d] hover:bg-[#d82a6f] active:scale-95 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#c51f5d]/30 hover:shadow-[#c51f5d]/50 transition duration-300 cursor-pointer flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar
            </Link>
            <Link 
              to="/juegos" 
              className="bg-[#243447] border border-[#243447] hover:border-[#c51f5d] text-white font-bold px-8 py-4 rounded-xl text-lg transition duration-300 flex items-center justify-center"
            >
              Explorar Juegos
            </Link>
          </div>
        </div>

        {/* Derecha: Ilustración / Mockup de la App */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-lg aspect-video bg-[#243447] rounded-2xl border-2 border-[#243447] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center group hover:border-[#c51f5d] transition duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#243447] via-[#141d26] to-[#243447] opacity-80"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-3">
              <div className="w-20 h-20 rounded-2xl bg-[#c51f5d]/20 border border-[#c51f5d] flex items-center justify-center text-[#c51f5d] group-hover:scale-110 transition duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 002-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">
                * Ilustración *
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas / Estadísticas */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/juegos" className="bg-[#243447] border border-[#243447] hover:border-[#c51f5d]/50 p-6 rounded-xl text-center shadow-lg transition duration-300 block">
            <h3 className="text-3xl font-black text-[#c51f5d]">+5,000</h3>
            <p className="text-gray-300 font-medium mt-1">Clips grabados</p>
          </Link>

          <Link to="/usuario/JhonHelldiver" className="bg-[#243447] border border-[#243447] hover:border-[#c51f5d]/50 p-6 rounded-xl text-center shadow-lg transition duration-300 block group">
            <h3 className="text-3xl font-black text-[#c51f5d]">+12,000</h3>
            <p className="text-gray-300 font-medium mt-1 group-hover:text-white transition">Comunidad de Usuarios →</p>
          </Link>

          <Link to="/juegos" className="bg-[#243447] border border-[#243447] hover:border-[#c51f5d]/50 p-6 rounded-xl text-center shadow-lg transition duration-300 block">
            <h3 className="text-3xl font-black text-[#c51f5d]">+200</h3>
            <p className="text-gray-300 font-medium mt-1">Juegos soportados</p>
          </Link>
        </div>
      </section>

      {/* Sección Características */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Características destacadas
          </h2>
          <Link to="/features" className="text-[#c51f5d] font-bold text-sm hover:underline flex items-center gap-1.5">
            Ver todas las características detalladas →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/features" className="bg-[#243447] rounded-xl p-6 border border-gray-700/50 hover:border-[#c51f5d] transition duration-300 flex flex-col items-center text-center group">
            <div className="w-full aspect-video bg-[#141d26] rounded-lg border border-gray-700/50 mb-6 flex items-center justify-center text-gray-500 group-hover:text-[#c51f5d] transition">
              <span className="text-xs tracking-wider uppercase font-semibold">🎯 Detección Automática</span>
            </div>
            <h3 className="text-xl font-bold text-white">Fácil de usar</h3>
          </Link>

          <Link to="/features" className="bg-[#243447] rounded-xl p-6 border border-gray-700/50 hover:border-[#c51f5d] transition duration-300 flex flex-col items-center text-center group">
            <div className="w-full aspect-video bg-[#141d26] rounded-lg border border-gray-700/50 mb-6 flex items-center justify-center text-gray-500 group-hover:text-[#c51f5d] transition">
              <span className="text-xs tracking-wider uppercase font-semibold">⚡ Cero Impacto en FPS</span>
            </div>
            <h3 className="text-xl font-bold text-white">Bien optimizado</h3>
          </Link>

          <Link to="/features" className="bg-[#243447] rounded-xl p-6 border border-gray-700/50 hover:border-[#c51f5d] transition duration-300 flex flex-col items-center text-center group">
            <div className="w-full aspect-video bg-[#141d26] rounded-lg border border-gray-700/50 mb-6 flex items-center justify-center text-gray-500 group-hover:text-[#c51f5d] transition">
              <span className="text-xs tracking-wider uppercase font-semibold">🔗 Nube Instantánea</span>
            </div>
            <h3 className="text-xl font-bold text-white">Comparte en cualquier lado</h3>
          </Link>
        </div>
      </section>

      {/* Sección Clips Populares */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-12 w-full">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Clips populares
          </h2>
          <Link to="/juegos" className="text-[#c51f5d] font-bold text-sm hover:underline">
            Ver más en Juegos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, usuario: 'JhonHelldiver', juego: 'Overwatch 2', vistas: '45.2k', desc: 'Pentakill en Overtime' },
            { id: 2, usuario: 'BugOnAHelldiverSuit', juego: 'Helldivers 2', vistas: '38.9k', desc: 'Extracción imposible' },
            { id: 3, usuario: 'FristianoRonaldo', juego: 'Valorant', vistas: '29.4k', desc: 'Ace clutch 1v5' },
          ].map((item) => (
            <div 
              key={item.id} 
              className="bg-[#243447] rounded-xl p-4 border border-gray-700/50 hover:border-[#c51f5d] transition duration-300 group"
            >
              <div className="w-full aspect-video bg-[#141d26] rounded-lg border border-gray-800 relative flex items-center justify-center overflow-hidden mb-3">
                <div className="w-12 h-12 rounded-full bg-[#c51f5d] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300 z-10">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="absolute bottom-3 left-3 text-xs text-gray-400 font-mono">
                  {item.vistas} vistas
                </span>
                <span className="absolute top-3 right-3 text-[10px] bg-[#c51f5d] text-white font-bold px-2 py-0.5 rounded">
                  {item.juego}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-bold text-white truncate">{item.desc}</span>
                <Link to={`/usuario/${item.usuario}`} className="text-[#c51f5d] hover:underline font-semibold flex-shrink-0 ml-2">
                  @{item.usuario}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#243447] bg-[#141d26] py-8 px-6 text-center text-sm text-gray-400">
        <p>© 2026 Clipped. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}