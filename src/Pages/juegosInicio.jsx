import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Footer,
  GameCard,
  ClipCard,
  ClipModal,
} from '../Componentes';

export default function JuegosInicio() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [clipModal, setClipModal] = useState(null);

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
      vistas: '45.2k vistas',
      hace: 'hace 1 día',
      resolucion: '1440p 60fps',
    },
    {
      id: 2,
      titulo: 'Extracción imposible esquivando 4 Titanes',
      juego: 'Helldivers 2',
      juegoId: 'helldivers-2',
      creador: 'BugOnAHelldiverSuit',
      creadorNombre: 'Terminid Infiltrado',
      duracion: '0:58',
      vistas: '38.9k vistas',
      hace: 'hace 2 días',
      resolucion: '4K 60fps',
    },
    {
      id: 3,
      titulo: 'Ace clutch 1v5 con sheriff en ronda de pistolas',
      juego: 'Valorant',
      juegoId: 'valorant',
      creador: 'FristianoRonaldo',
      creadorNombre: 'Fristiano Ronaldo',
      duracion: '0:41',
      vistas: '29.4k vistas',
      hace: 'hace 3 días',
      resolucion: '1080p 120fps',
    },
    {
      id: 4,
      titulo: 'Resurrección cuádruple en el último segundo',
      juego: 'Overwatch 2',
      juegoId: 'overwatch',
      creador: 'HealerMain',
      creadorNombre: 'Mercy & Kiriko Lover',
      duracion: '0:26',
      vistas: '21.7k vistas',
      hace: 'hace 4 días',
      resolucion: '1440p 60fps',
    },
    {
      id: 5,
      titulo: 'Earthshatter a través de la carga que gana la final',
      juego: 'Overwatch 2',
      juegoId: 'overwatch',
      creador: 'TankPro',
      creadorNombre: 'Reinhardt Shield',
      duracion: '0:35',
      vistas: '19.3k vistas',
      hace: 'hace 5 días',
      resolucion: '1440p 60fps',
    },
    {
      id: 6,
      titulo: 'Falso rescate con caída cómica en nave de extracción',
      juego: 'Helldivers 2',
      juegoId: 'helldivers-2',
      creador: 'ToxicPlayer',
      creadorNombre: 'Reaper Main',
      duracion: '0:22',
      vistas: '33.1k vistas',
      hace: 'hace 6 días',
      resolucion: '1080p 60fps',
    },
  ];

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

        {/* Sección: Lo mejor de la semana usando GameCard modular */}
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
              <GameCard
                key={juego.id}
                id={juego.id}
                nombre={juego.nombre}
                categoria={juego.categoria}
                clipsCount={juego.clipsCount}
                posicion={juego.posicion}
                color={juego.color}
              />
            ))}
          </div>
        </section>

        {/* Sección: Fin de semana en Overwatch */}
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
              { titulo: 'Combo gravitón + bomba', duracion: '0:28', vistas: '14.2k vistas' },
              { titulo: 'Widowmaker 4K instantáneo', duracion: '0:19', vistas: '28.6k vistas' },
              { titulo: 'Lucio boop triple en Ilios', duracion: '0:15', vistas: '35.1k vistas' },
              { titulo: 'Parada milagrosa en overtime', duracion: '0:42', vistas: '18.9k vistas' },
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
                    <p className="text-[11px] text-gray-400">{clip.vistas} · Ver clip</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Sección: Clips en Tendencia de la Comunidad usando ClipCard modular */}
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
              <ClipCard
                key={clip.id}
                clip={clip}
                onClick={(c) => setClipModal(c)}
                showCreator={true}
                showGame={true}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Modal de Clip modular */}
      <ClipModal
        clip={clipModal}
        onClose={() => setClipModal(null)}
      />

      <Footer />
    </div>
  );
}