import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Navbar,
  Footer,
  CreatorItem,
  ClipCard,
  ClipModal,
} from '../Componentes';

export default function JuegoDetalle() {
  const { juegoId } = useParams();

  // Base de datos de juegos soportados
  const juegosData = {
    overwatch: {
      nombre: 'Overwatch 2',
      categoria: 'Shooter Táctico por Equipos',
      desarrollador: 'Blizzard Entertainment',
      clipsTotales: '12.4k',
      jugadoresActivos: '140k+',
      descripcion:
        'Overwatch 2 es un juego de disparos por equipos gratuito ambientado en un futuro optimista, donde cada partida es una batalla campal definitiva de 5 contra 5.',
      creadoresPrincipales: [
        { handle: 'JhonHelldiver', rol: 'Top 500 DPS' },
        { handle: 'BugOnAHelldiverSuit', rol: 'Creador de Contenido' },
        { handle: 'FristianoRonaldo', rol: 'Widowmaker God' },
      ],
      creadoresSecundarios: [
        { handle: 'ToxicPlayer', rol: 'Reaper Main' },
        { handle: 'HealerMain', rol: 'Soporte Top' },
        { handle: 'TankPro', rol: 'Reinhardt Shield' },
      ],
      clips: [
        {
          id: 1,
          titulo: 'Pentakill imposible con Reaper en tiempo extra',
          creador: 'JhonHelldiver',
          duracion: '0:34',
          vistas: '45.2k vistas',
          hace: 'hace 1 día',
          categoria: 'Mejores jugadas',
          resolucion: '1440p 60fps',
          juego: 'Overwatch 2',
        },
        {
          id: 2,
          titulo: 'Widowmaker 360 no scope en King’s Row',
          creador: 'FristianoRonaldo',
          duracion: '0:22',
          vistas: '42.9k vistas',
          hace: 'hace 3 días',
          categoria: 'Clutchs',
          resolucion: '1080p 120fps',
          juego: 'Overwatch 2',
        },
        {
          id: 3,
          titulo: 'Resurrección cuádruple en el último segundo',
          creador: 'HealerMain',
          duracion: '0:26',
          vistas: '21.7k vistas',
          hace: 'hace 4 días',
          categoria: 'Competitivo',
          resolucion: '1440p 60fps',
          juego: 'Overwatch 2',
        },
        {
          id: 4,
          titulo: 'Earthshatter a través de la carga que gana la final',
          creador: 'TankPro',
          duracion: '0:35',
          vistas: '19.3k vistas',
          hace: 'hace 5 días',
          categoria: 'Competitivo',
          resolucion: '1440p 60fps',
          juego: 'Overwatch 2',
        },
        {
          id: 5,
          titulo: 'Baja cuádruple con la bomba de D.Va tras resbalar',
          creador: 'JhonHelldiver',
          duracion: '0:29',
          vistas: '11.8k vistas',
          hace: 'hace 1 semana',
          categoria: 'Mejores jugadas',
          resolucion: '1440p 60fps',
          juego: 'Overwatch 2',
        },
        {
          id: 6,
          titulo: 'Robo épico de punto en Ilios Pozo con Lucio',
          creador: 'ToxicPlayer',
          duracion: '0:31',
          vistas: '8.6k vistas',
          hace: 'hace 2 semanas',
          categoria: 'Bloopers',
          resolucion: '1080p 60fps',
          juego: 'Overwatch 2',
        },
      ],
    },
    'helldivers-2': {
      nombre: 'Helldivers 2',
      categoria: 'Cooperativo de Acción en Tercera Persona',
      desarrollador: 'Arrowhead Game Studios',
      clipsTotales: '9.8k',
      jugadoresActivos: '180k+',
      descripcion:
        'Únete a los Helldivers y lucha por la libertad junto a tus amigos a través de una galaxia hostil en este frenético shooter cooperativo en tercera persona.',
      creadoresPrincipales: [
        { handle: 'JhonHelldiver', rol: 'General Democrático' },
        { handle: 'BugOnAHelldiverSuit', rol: 'Bicho Espía' },
        { handle: 'ToxicPlayer', rol: 'Experto en 500kg' },
      ],
      creadoresSecundarios: [
        { handle: 'TankPro', rol: 'Escudo Pesado' },
        { handle: 'HealerMain', rol: 'Suministros Médicos' },
        { handle: 'FristianoRonaldo', rol: 'Francotirador' },
      ],
      clips: [
        {
          id: 1,
          titulo: 'Extracción en el último segundo esquivando 4 Titanes',
          creador: 'BugOnAHelldiverSuit',
          duracion: '0:48',
          vistas: '38.9k vistas',
          hace: 'hace 2 días',
          categoria: 'Clutchs',
          resolucion: '4K 60fps',
          juego: 'Helldivers 2',
        },
        {
          id: 2,
          titulo: 'Sobreviviendo a 3 Titanes de Bilis en solitario',
          creador: 'JhonHelldiver',
          duracion: '1:12',
          vistas: '34.2k vistas',
          hace: 'hace 1 semana',
          categoria: 'Mejores jugadas',
          resolucion: '4K 60fps',
          juego: 'Helldivers 2',
        },
        {
          id: 3,
          titulo: 'Ataque orbital 500kg perfecto sobre nido principal',
          creador: 'ToxicPlayer',
          duracion: '0:38',
          vistas: '22.3k vistas',
          hace: 'hace 3 semanas',
          categoria: 'Mejores jugadas',
          resolucion: '4K 60fps',
          juego: 'Helldivers 2',
        },
        {
          id: 4,
          titulo: 'Caída cómica intentando subir a la nave Pelican-1',
          creador: 'BugOnAHelldiverSuit',
          duracion: '0:25',
          vistas: '19.4k vistas',
          hace: 'hace 3 semanas',
          categoria: 'Bloopers',
          resolucion: '1080p 60fps',
          juego: 'Helldivers 2',
        },
        {
          id: 5,
          titulo: 'Defensa heroica con torreta automática en nivel 9',
          creador: 'TankPro',
          duracion: '0:45',
          vistas: '15.6k vistas',
          hace: 'hace 1 mes',
          categoria: 'Competitivo',
          resolucion: '4K 60fps',
          juego: 'Helldivers 2',
        },
        {
          id: 6,
          titulo: 'Disparo de lanzacohetes a quemarropa sin morir',
          creador: 'FristianoRonaldo',
          duracion: '0:30',
          vistas: '12.1k vistas',
          hace: 'hace 1 mes',
          categoria: 'Clutchs',
          resolucion: '1080p 60fps',
          juego: 'Helldivers 2',
        },
      ],
    },
  };

  // Obtener juego actual (por defecto overwatch)
  const juegoActual = juegosData[juegoId] || juegosData.overwatch;

  // Estados
  const [reproductorActivo, setReproductorActivo] = useState(false);
  const [filtroClip, setFiltroClip] = useState('Todos');
  const [clipModal, setClipModal] = useState(null);

  const clipsFiltrados = juegoActual.clips.filter((c) => {
    if (filtroClip === 'Todos') return true;
    return c.categoria === filtroClip;
  });

  return (
    <div className="min-h-screen bg-[#141922] text-white font-sans flex flex-col selection:bg-[#d92759] selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex-1 w-full space-y-12">
        
        {/* Botón Volver y Título del Juego */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            to="/juegos"
            className="flex items-center gap-3 text-2xl sm:text-3xl font-black text-white hover:text-gray-300 transition group cursor-pointer w-fit"
          >
            <div className="p-2.5 bg-[#222a37] rounded-xl border border-gray-700/60 group-hover:bg-[#2c3646] group-hover:border-[#d92759] transition duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-300 group-hover:text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </div>
            <span>{juegoActual.nombre}</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="bg-[#222a37] px-3.5 py-1.5 rounded-xl border border-gray-700/60 text-gray-300">
              🎮 {juegoActual.categoria}
            </span>
            <span className="bg-[#d92759]/20 text-[#d92759] px-3 py-1.5 rounded-xl border border-[#d92759]/40 font-bold">
              {juegoActual.clipsTotales} clips registrados
            </span>
          </div>
        </div>

        {/* Contenedor Principal de las 3 Columnas Originales (Portada, Creadores, Reproductor) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Columna 1: Portada del Juego */}
          <div className="md:col-span-3">
            <div className="w-full h-full min-h-[360px] bg-[#222a37] rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 group border border-gray-800/80 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-[#d92759] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  Destacado
                </span>
                <span className="text-xs text-gray-400 font-mono">2026</span>
              </div>

              <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#141922]/80 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-[#d92759] group-hover:border-[#d92759] group-hover:scale-110 transition duration-300 shadow-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <span className="text-white font-black text-lg tracking-wide mt-3">
                  {juegoActual.nombre}
                </span>
                <p className="text-gray-400 text-xs mt-1">
                  {juegoActual.desarrollador}
                </p>
              </div>

              <div className="relative z-10 pt-2 border-t border-gray-800 text-[11px] text-gray-400 text-center">
                {juegoActual.jugadoresActivos} activos en comunidad
              </div>
            </div>
          </div>

          {/* Columna 2: CREADORES DESTACADOS usando CreatorItem modular */}
          <div className="md:col-span-4 flex flex-col">
            <div className="bg-[#222a37] rounded-2xl p-6 flex-1 shadow-xl border border-gray-800/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                    <span className="text-[#d92759]">★</span> Creadores destacados
                  </h3>
                  <span className="text-[11px] text-gray-400 font-mono">Top Jugadores</span>
                </div>

                {/* Creadores Principales */}
                <div className="space-y-4 mb-6">
                  {juegoActual.creadoresPrincipales.map((creador, i) => (
                    <CreatorItem
                      key={i}
                      handle={creador.handle}
                      rol={creador.rol}
                      tipo="principal"
                    />
                  ))}
                </div>

                <hr className="border-gray-700/40 mb-4" />

                {/* Creadores Secundarios */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Comunidad Activa
                  </span>
                  {juegoActual.creadoresSecundarios.map((creador, i) => (
                    <CreatorItem
                      key={i}
                      handle={creador.handle}
                      rol={creador.rol}
                      tipo="secundario"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3: Reproductor de Video */}
          <div className="md:col-span-5">
            <div
              onClick={() => setReproductorActivo(!reproductorActivo)}
              className="w-full h-full min-h-[360px] bg-[#222a37] rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#283242] transition duration-300 shadow-xl group border border-gray-800/80 relative overflow-hidden p-6 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/50"></div>

              {reproductorActivo ? (
                <div className="relative z-10 w-full space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#d92759] text-white flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-base">
                    Reproduciendo: Clip Destacado de la Semana
                  </h4>
                  <p className="text-xs text-gray-400 font-mono">
                    Resolución: 1440p 60fps · Audio Multipista
                  </p>
                  <div className="w-full max-w-xs mx-auto h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-[#d92759]"></div>
                  </div>
                  <span className="text-[11px] text-gray-500 block">
                    Haz clic para pausar
                  </span>
                </div>
              ) : (
                <div className="relative z-10 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#141922]/90 border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-[#d92759] group-hover:scale-110 group-hover:border-[#d92759] transition-all duration-300 shadow-2xl mx-auto">
                    <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-bold tracking-wider text-base block group-hover:text-[#d92759] transition-colors">
                      REPRODUCIR CLIP DESTACADO
                    </span>
                    <span className="text-xs text-gray-400 mt-1 block">
                      Mejor jugada de la semana en {juegoActual.nombre}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Rejilla de Clips del Juego usando ClipCard modular */}
        <section className="space-y-6 pt-4 border-t border-gray-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide flex items-center gap-2">
                <span>🎮</span> Rejilla de Clips de {juegoActual.nombre}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Explora todas las jugadas, clutchs y momentos divertidos compartidos por los jugadores
              </p>
            </div>

            {/* Filtros por tipo de clip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {['Todos', 'Mejores jugadas', 'Clutchs', 'Competitivo', 'Bloopers'].map((filtro) => (
                <button
                  key={filtro}
                  onClick={() => setFiltroClip(filtro)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex-shrink-0 ${
                    filtroClip === filtro
                      ? 'bg-[#d92759] text-white shadow-md shadow-[#d92759]/30'
                      : 'bg-[#222a37] text-gray-400 hover:text-white hover:bg-[#283242] border border-gray-800'
                  }`}
                >
                  {filtro}
                </button>
              ))}
            </div>
          </div>

          {/* Rejilla de Clips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clipsFiltrados.map((clip) => (
              <ClipCard
                key={clip.id}
                clip={clip}
                onClick={(c) => setClipModal(c)}
                showCreator={true}
                showGame={false}
              />
            ))}
          </div>

          {clipsFiltrados.length === 0 && (
            <div className="text-center py-12 text-gray-400 bg-[#1a222f] rounded-2xl border border-gray-800">
              No hay clips disponibles para esta categoría en este momento.
            </div>
          )}
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