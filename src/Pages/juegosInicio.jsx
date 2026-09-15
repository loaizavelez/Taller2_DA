import { useState } from 'react';
import Navbar from '../Componentes/Navbar';
import { Link } from 'react-router-dom';

export default function JuegosInicio() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  // Juegos destacados de la semana
  const juegosDestacados = [
    {
      id: 'overwatch',
      nombre: 'Overwatch 2',
      categoria: 'Shooter Táctico',
      clipsCount: '12.4k clips',
      posicion: '#1',
      color: 'from-orange-500 to-[#d92759]',
    },
    {
      id: 'helldivers-2',
      nombre: 'Helldivers 2',
      categoria: 'Cooperativo',
      clipsCount: '9.8k clips',
      posicion: '#2',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      id: 'valorant',
      nombre: 'Valorant',
      categoria: 'Shooter Táctico',
      clipsCount: '15.2k clips',
      posicion: '#3',
      color: 'from-red-600 to-rose-700',
    },
    {
      id: 'apex-legends',
      nombre: 'Apex Legends',
      categoria: 'Battle Royale',
      clipsCount: '8.1k clips',
      posicion: '#4',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      id: 'counter-strike-2',
      nombre: 'Counter-Strike 2',
      categoria: 'Shooter Táctico',
      clipsCount: '11.5k clips',
      posicion: '#5',
      color: 'from-blue-600 to-cyan-700',
    },
  ];

  // Clips en tendencia de la comunidad
  const clipsTendencia = [
    {
      id: 1,
      titulo: 'Pentakill imposible con Reaper en tiempo extra',
      juego: 'Overwatch 2',
      juegoId: 'overwatch',
      creador: 'JhonHelldiver',
      creadorNombre: 'Jhon Helldiver',
      duracion: '0:32',
      vistas: '45.2k',
      hace: 'hace 1 día',
    },
    {
      id: 2,
      titulo: 'Extracción imposible esquivando 4 Titanes',
      juego: 'Helldivers 2',
      juegoId: 'helldivers-2',
      creador: 'BugOnAHelldiverSuit',
      creadorNombre: 'Terminid Infiltrado',
      duracion: '0:58',
      vistas: '38.9k',
      hace: 'hace 2 días',
    },
    {
      id: 3,
      titulo: 'Ace clutch 1v5 con sheriff en ronda de pistolas',
      juego: 'Valorant',
      juegoId: 'valorant',
      creador: 'FristianoRonaldo',
      creadorNombre: 'Fristiano Ronaldo',
      duracion: '0:41',
      vistas: '29.4k',
      hace: 'hace 3 días',
    },
    {
      id: 4,
      titulo: 'Resurrección cuádruple en el último segundo',
      juego: 'Overwatch 2',
      juegoId: 'overwatch',
      creador: 'HealerMain',
      creadorNombre: 'Mercy & Kiriko Lover',
      duracion: '0:26',
      vistas: '21.7k',
      hace: 'hace 4 días',
    },
    {
      id: 5,
      titulo: 'Earthshatter a través de la carga que gana la final',
      juego: 'Overwatch 2',
      juegoId: 'overwatch',
      creador: 'TankPro',
      creadorNombre: 'Reinhardt Shield',
      duracion: '0:35',
      vistas: '19.3k',
      hace: 'hace 5 días',
    },
    {
      id: 6,
      titulo: 'Falso rescate con caída cómica en nave de extracción',
      juego: 'Helldivers 2',
      juegoId: 'helldivers-2',
      creador: 'ToxicPlayer',
      creadorNombre: 'Reaper Main',
      duracion: '0:22',
      vistas: '33.1k',
      hace: 'hace 6 días',
    },
  ];

  const [clipModal, setClipModal] = useState(null);

  const juegosFiltrados = juegosDestacados.filter((juego) => {
    const coincideCategoria =
      categoriaActiva === 'Todos' || juego.categoria === categoriaActiva;
    const coincideBusqueda = juego.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="min-h-screen bg-[#141922] text-white font-sans flex flex-col selection:bg-[#d92759] selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex-1 w-full space-y-12">
        
        {/* Cabecera y Barra de Búsqueda */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2 border-b border-gray-800/60">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Explorar Juegos y Clips
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Descubre los mejores momentos y creadores de la comunidad
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Buscar juego..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-[#222a37] border border-gray-700/60 rounded-xl px-4 py-2.5 pl-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d92759] transition"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Filtro por Categorías */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mt-4 text-xs font-semibold">
          {['Todos', 'Shooter Táctico', 'Cooperativo', 'Battle Royale'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded-xl transition cursor-pointer flex-shrink-0 ${
                categoriaActiva === cat
                  ? 'bg-[#d92759] text-white shadow-md shadow-[#d92759]/30'
                  : 'bg-[#222a37] text-gray-400 hover:text-white hover:bg-[#2a3648] border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sección: Lo mejor de la semana (Clicables a cada juego) */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black text-white tracking-wide">
                Lo mejor de la semana
              </h2>
              <span className="text-xs bg-[#d92759]/20 text-[#d92759] font-bold px-2.5 py-0.5 rounded-full border border-[#d92759]/40">
                Top Juegos
              </span>
            </div>
            <span className="text-xs text-gray-400 hidden sm:inline">
              Haz clic en cualquier juego para ver todos sus clips
            </span>
          </div>

          <div
            className="flex gap-6 overflow-x-auto pb-4 pt-2 px-1 -mx-1"
            style={{ scrollbarWidth: 'none' }}
          >
            {juegosFiltrados.map((juego) => (
              <Link
                key={juego.id}
                to={`/juegos/${juego.id}`}
                className="w-52 flex-shrink-0 cursor-pointer group block"
              >
                <div className="aspect-[3/4] bg-[#222a37] rounded-2xl group-hover:ring-2 ring-[#d92759] transition-all duration-300 relative w-full h-full flex flex-col justify-between p-4 overflow-hidden border border-gray-800/80 shadow-lg group-hover:-translate-y-1">
                  {/* Gradiente de fondo del juego */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${juego.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>

                  {/* Posición #1, #2, etc. */}
                  <span className="absolute -top-1 -right-1 text-[#d92759] font-black text-4xl drop-shadow-xl z-10 pr-3 pt-2">
                    {juego.posicion}
                  </span>

                  {/* Icono central de Play con efecto hover */}
                  <div className="my-auto flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#141922]/80 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-[#d92759] group-hover:scale-110 group-hover:border-[#d92759] transition-all duration-300 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-7 h-7 ml-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Información inferior del juego */}
                  <div className="relative z-10 bg-[#141922]/90 backdrop-blur -mx-4 -mb-4 p-3 border-t border-gray-800">
                    <h3 className="font-bold text-sm text-white group-hover:text-[#d92759] transition truncate">
                      {juego.nombre}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-gray-400 mt-1">
                      <span>{juego.categoria}</span>
                      <span className="text-[#d92759] font-semibold">{juego.clipsCount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Sección: Fin de semana en Overwatch (Destacado del wireframe existente) */}
        <section className="bg-[#1a222f] p-6 sm:p-8 rounded-3xl border border-gray-700/60 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#d92759] uppercase tracking-wider mb-1">
                <span>🔥 Destacado de la comunidad</span>
              </div>
              <h2 className="text-2xl font-black text-white tracking-wide">
                Fin de semana en Overwatch
              </h2>
            </div>
            <Link
              to="/juegos/overwatch"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#d92759] hover:text-white transition cursor-pointer"
            >
              Ver todos los clips de Overwatch →
            </Link>
          </div>

          <div
            className="flex gap-6 overflow-x-auto pb-4 pt-1 px-1 -mx-1"
            style={{ scrollbarWidth: 'none' }}
          >
            {[
              { titulo: 'Combo gravitón + bomba', duracion: '0:28', vistas: '14.2k' },
              { titulo: 'Widowmaker 4K instantáneo', duracion: '0:19', vistas: '28.6k' },
              { titulo: 'Lucio boop triple en Ilios', duracion: '0:15', vistas: '35.1k' },
              { titulo: 'Parada milagrosa en overtime', duracion: '0:42', vistas: '18.9k' },
            ].map((clip, i) => (
              <Link
                key={i}
                to="/juegos/overwatch"
                className="w-72 flex-shrink-0 cursor-pointer group block"
              >
                <div className="aspect-video bg-[#222a37] rounded-2xl group-hover:ring-2 ring-[#d92759] transition-all duration-300 w-full h-full flex flex-col justify-between p-3 border border-gray-700/50 shadow-md relative overflow-hidden group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="relative z-10 flex justify-end">
                    <span className="bg-black/70 backdrop-blur text-[11px] font-mono text-white px-2 py-0.5 rounded border border-white/10">
                      {clip.duracion}
                    </span>
                  </div>

                  <div className="my-auto flex items-center justify-center relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#d92759] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 ml-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h4 className="text-xs font-bold text-white group-hover:text-[#d92759] transition truncate">
                      {clip.titulo}
                    </h4>
                    <p className="text-[11px] text-gray-400">{clip.vistas} vistas · Ver clip</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Sección NUEVA solicitada: Clips en Tendencia de la Comunidad con enlaces a Usuarios */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-black text-white tracking-wide">
                Clips en Tendencia de la Comunidad
              </h2>
              <p className="text-gray-400 text-sm">
                Las jugadas más votadas por la comunidad de Clipped esta semana
              </p>
            </div>
            <span className="text-xs text-gray-500 font-mono">Actualizado hace 10 min</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clipsTendencia.map((clip) => (
              <div
                key={clip.id}
                className="bg-[#222a37] rounded-2xl overflow-hidden border border-gray-700/60 hover:border-[#d92759] transition-all duration-300 group shadow-lg flex flex-col"
              >
                {/* Miniatura del clip */}
                <div
                  onClick={() => setClipModal(clip)}
                  className="aspect-video bg-[#141922] relative cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#141922] via-[#243447] to-[#141922] opacity-80 group-hover:scale-105 transition-transform duration-500"></div>

                  <div className="w-12 h-12 rounded-full bg-[#d92759] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#eb3369] transition duration-300 z-10">
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <span className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur text-[11px] font-mono text-white px-2 py-0.5 rounded border border-white/10">
                    {clip.duracion}
                  </span>

                  <span className="absolute top-2.5 left-2.5 bg-[#d92759]/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded">
                    {clip.juego}
                  </span>
                </div>

                {/* Metadatos y Creador (Enlace a Usuario) */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setClipModal(clip)}
                      className="font-bold text-white text-sm hover:text-[#d92759] transition cursor-pointer line-clamp-1"
                    >
                      {clip.titulo}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-1">
                      {clip.vistas} vistas · {clip.hace}
                    </p>
                  </div>

                  {/* Creador del clip que enlaza a la página de Usuario */}
                  <div className="pt-2 border-t border-gray-700/50 flex items-center justify-between">
                    <Link
                      to={`/usuario/${clip.creador}`}
                      className="flex items-center gap-2 group/user hover:opacity-90 transition"
                      title={`Ver perfil de ${clip.creadorNombre}`}
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xs font-black text-white group-hover/user:ring-2 ring-[#d92759] transition">
                        {clip.creadorNombre.charAt(0)}
                      </div>
                      <span className="text-xs font-semibold text-gray-300 group-hover/user:text-[#d92759] transition">
                        @{clip.creador}
                      </span>
                    </Link>

                    <Link
                      to={`/juegos/${clip.juegoId}`}
                      className="text-[11px] text-gray-400 hover:text-white transition font-medium"
                    >
                      Ver juego →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Modal de Clip */}
      {clipModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a222f] border border-gray-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-700/60 bg-[#141922]">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎮</span>
                <div>
                  <h3 className="text-sm font-bold text-white">{clipModal.titulo}</h3>
                  <p className="text-xs text-gray-400">{clipModal.juego} · Clip de @{clipModal.creador}</p>
                </div>
              </div>
              <button
                onClick={() => setClipModal(null)}
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video bg-black relative flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#d92759] text-white flex items-center justify-center mx-auto shadow-xl">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xs font-mono text-gray-400">Reproduciendo {clipModal.duracion} en 1440p 60fps</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between bg-[#141922] text-xs">
              <Link
                to={`/usuario/${clipModal.creador}`}
                className="text-[#d92759] font-bold hover:underline"
              >
                Ver más clips de @{clipModal.creador} →
              </Link>
              <button
                onClick={() => alert('¡Enlace de clip copiado!')}
                className="bg-[#222a37] hover:bg-[#2c3646] text-white font-bold px-4 py-2 rounded-xl transition border border-gray-700 cursor-pointer"
              >
                Compartir 🔗
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-800/80 bg-[#141922] py-8 px-6 text-center text-sm text-gray-500">
        <p>© 2026 Clipped. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}