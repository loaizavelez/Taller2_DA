import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Componentes/Navbar';

export default function Usuario() {
  const { username } = useParams();

  // Datos base por usuario o default
  const perfilesData = {
    JhonHelldiver: {
      nombre: 'Jhon Helldiver',
      tag: '@JhonHelldiver',
      bio: 'Defendiendo la democracia gestionada en Helldivers 2 y subiendo rango en Overwatch. Cazador de clutchs épicos y jugadas imposibles. 🎮🔥',
      seguidores: '24.5k',
      siguiendo: '142',
      juegoFavorito: 'Helldivers 2',
      avatarColor: 'from-amber-500 to-[#d92759]',
    },
    BugOnAHelldiverSuit: {
      nombre: 'Terminid Infiltrado',
      tag: '@BugOnAHelldiverSuit',
      bio: 'Un bicho pacífico vistiendo una armadura de Helldiver. Nadie sospecha nada. Clips de supervivencia y momentos graciosos.',
      seguidores: '18.2k',
      siguiendo: '89',
      juegoFavorito: 'Helldivers 2',
      avatarColor: 'from-emerald-500 to-teal-700',
    },
    FristianoRonaldo: {
      nombre: 'Fristiano Ronaldo',
      tag: '@FristianoRonaldo',
      bio: 'El Bicho de los Shooters. SIUUUU! Especialista en tiros a la cabeza y jugadas de último segundo.',
      seguidores: '45.1k',
      siguiendo: '310',
      juegoFavorito: 'Overwatch',
      avatarColor: 'from-blue-600 to-[#d92759]',
    },
    ToxicPlayer: {
      nombre: 'Reaper Main',
      tag: '@ToxicPlayer',
      bio: 'Solo juego DPS. No pidas que cambie. Die, die, die! Clips de quintuples con Death Blossom.',
      seguidores: '9.8k',
      siguiendo: '45',
      juegoFavorito: 'Overwatch',
      avatarColor: 'from-purple-600 to-gray-900',
    },
    HealerMain: {
      nombre: 'Mercy & Kiriko Lover',
      tag: '@HealerMain',
      bio: 'Manteniendo con vida a los que no saben cubrirse. Resurrecciones clutch y curaciones milagrosas.',
      seguidores: '31.4k',
      siguiendo: '215',
      juegoFavorito: 'Overwatch',
      avatarColor: 'from-pink-400 to-rose-600',
    },
    TankPro: {
      nombre: 'Reinhardt Shield',
      tag: '@TankPro',
      bio: 'Soy el escudo de mi equipo. Honor y gloria. Clips de cargas devastadoras y Earthshatters limpios.',
      seguidores: '14.9k',
      siguiendo: '76',
      juegoFavorito: 'Overwatch',
      avatarColor: 'from-yellow-500 to-amber-700',
    },
  };

  const perfilActual = perfilesData[username] || {
    nombre: username || 'Jhon Helldiver',
    tag: username ? `@${username}` : '@JhonHelldiver',
    bio: 'Jugador competitivo de shooters y creador de contenido en Clipped. Cazador incansable de clips, jugadas clutch y momentos épicos. 🎮🔥',
    seguidores: '24.5k',
    siguiendo: '142',
    juegoFavorito: 'Overwatch',
    avatarColor: 'from-rose-500 to-[#d92759]',
  };

  // Estados interactivos
  const [siguiendo, setSiguiendo] = useState(false);
  const [seguidoresCount, setSeguidoresCount] = useState(24500);
  const [juegoFiltro, setJuegoFiltro] = useState('Todos');
  const [orden, setOrden] = useState('recientes');
  const [clipSeleccionado, setClipSeleccionado] = useState(null);
  const [mostrarModalDM, setMostrarModalDM] = useState(false);
  const [mensajeDM, setMensajeDM] = useState('');
  const [dmEnviado, setDmEnviado] = useState(false);

  // Lista de 9 clips según la rejilla 3x3 del Wireframe 2
  const clips = [
    {
      id: 1,
      titulo: 'Pentakill imposible en Punto B',
      juego: 'Overwatch',
      vistas: '15.4k vistas',
      tiempo: 'hace 2 días',
      duracion: '0:34',
      resolucion: '1440p 60fps',
    },
    {
      id: 2,
      titulo: 'Extracción en el último segundo',
      juego: 'Helldivers 2',
      vistas: '28.1k vistas',
      tiempo: 'hace 3 días',
      duracion: '0:48',
      resolucion: '4K 60fps',
    },
    {
      id: 3,
      titulo: 'Widowmaker 360 no scope en King’s Row',
      juego: 'Overwatch',
      vistas: '42.9k vistas',
      tiempo: 'hace 5 días',
      duracion: '0:22',
      resolucion: '1080p 120fps',
    },
    {
      id: 4,
      titulo: 'Baja cuádruple con la bomba de D.Va',
      juego: 'Overwatch',
      vistas: '11.8k vistas',
      tiempo: 'hace 1 semana',
      duracion: '0:29',
      resolucion: '1440p 60fps',
    },
    {
      id: 5,
      titulo: 'Sobreviviendo a 3 Titanes de Bilis solo',
      juego: 'Helldivers 2',
      vistas: '34.2k vistas',
      tiempo: 'hace 1 semana',
      duracion: '1:12',
      resolucion: '4K 60fps',
    },
    {
      id: 6,
      titulo: 'Salvo la partida en tiempo extra',
      juego: 'Overwatch',
      vistas: '19.7k vistas',
      tiempo: 'hace 2 semanas',
      duracion: '0:41',
      resolucion: '1440p 60fps',
    },
    {
      id: 7,
      titulo: 'Robo épico de punto en Ilios Pozo',
      juego: 'Overwatch',
      vistas: '8.6k vistas',
      tiempo: 'hace 2 semanas',
      duracion: '0:31',
      resolucion: '1080p 60fps',
    },
    {
      id: 8,
      titulo: 'Ataque orbital 500kg perfecto',
      juego: 'Helldivers 2',
      vistas: '22.3k vistas',
      tiempo: 'hace 3 semanas',
      duracion: '0:38',
      resolucion: '4K 60fps',
    },
    {
      id: 9,
      titulo: 'Nano Blade clutch en overtime',
      juego: 'Overwatch',
      vistas: '16.9k vistas',
      tiempo: 'hace 1 mes',
      duracion: '0:45',
      resolucion: '1440p 60fps',
    },
  ];

  // Manejador del botón Seguir
  const handleToggleSeguir = () => {
    if (siguiendo) {
      setSiguiendo(false);
      setSeguidoresCount((prev) => prev - 1);
    } else {
      setSiguiendo(true);
      setSeguidoresCount((prev) => prev + 1);
    }
  };

  // Filtrado de clips
  const clipsFiltrados = clips
    .filter((clip) => {
      if (juegoFiltro === 'Todos') return true;
      return clip.juego.toLowerCase().includes(juegoFiltro.toLowerCase());
    })
    .sort((a, b) => {
      if (orden === 'vistos') {
        return parseFloat(b.vistas) - parseFloat(a.vistas);
      }
      return a.id - b.id; // recientes por defecto
    });

  return (
    <div className="min-h-screen bg-[#141922] text-white font-sans flex flex-col selection:bg-[#d92759] selection:text-white">
      {/* 1. Header según wireframe */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Contenedor con marco estilizado según Wireframe 2 */}
        <div className="bg-[#1a222f] border border-gray-700/60 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Banner / Portada con botón ... */}
          <div className="relative h-44 sm:h-64 bg-gradient-to-r from-[#1f2937] via-[#243447] to-[#161d26] overflow-hidden border-b border-gray-700/50">
            {/* Patrón geométrico en X estilo wireframe */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a222f] via-transparent to-black/30"></div>

            {/* Botón de opciones '...' en la esquina superior derecha */}
            <button
              onClick={() => alert('Opciones del perfil:\n- Compartir perfil\n- Copiar enlace\n- Reportar')}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#141922]/70 hover:bg-[#141922] text-gray-300 hover:text-white border border-gray-700/60 flex items-center justify-center transition backdrop-blur cursor-pointer shadow-lg z-10"
              title="Más opciones"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 10a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4zm6 0a2 2 0 110 4 2 2 0 010-4z" />
              </svg>
            </button>
          </div>

          {/* Sección de Avatar y Datos del Usuario */}
          <div className="px-6 sm:px-10 pb-8 relative">
            
            {/* Avatar circular superpuesto según Wireframe */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 mb-5 gap-4">
              <div className="flex items-end gap-5">
                <div className="relative">
                  <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr ${perfilActual.avatarColor} p-1 shadow-2xl ring-4 ring-[#1a222f]`}>
                    <div className="w-full h-full rounded-full bg-[#141922] flex items-center justify-center text-3xl sm:text-4xl font-black text-white">
                      {perfilActual.nombre.charAt(0)}
                    </div>
                  </div>
                  {/* Indicador en línea */}
                  <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-[#1a222f]" title="En línea"></div>
                </div>

                <div className="space-y-1 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                    {perfilActual.nombre}
                    <span className="text-[#d92759]" title="Creador Verificado">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm font-bold text-gray-400 font-mono">
                    {perfilActual.tag}
                  </p>
                </div>
              </div>

              {/* Botones de acción: [Seguir] y [DM] según Wireframe 2 */}
              <div className="flex items-center gap-3 sm:mb-2">
                <button
                  onClick={handleToggleSeguir}
                  className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer shadow-lg flex items-center gap-2 ${
                    siguiendo
                      ? 'bg-transparent border border-[#d92759] text-[#d92759] hover:bg-[#d92759]/10'
                      : 'bg-[#d92759] hover:bg-[#eb3369] text-white active:scale-95 shadow-[#d92759]/30'
                  }`}
                >
                  {siguiendo ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Siguiendo
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      </svg>
                      Seguir
                    </>
                  )}
                </button>

                <button
                  onClick={() => setMostrarModalDM(true)}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm bg-[#222a37] hover:bg-[#2a3648] text-white border border-gray-700/60 transition cursor-pointer flex items-center gap-2 shadow-md"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  DM
                </button>
              </div>
            </div>

            {/* Descripción del usuario según Wireframe */}
            <div className="space-y-3 max-w-3xl">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {perfilActual.bio}
              </p>

              {/* Estadísticas de Seguidores según Wireframe: xx.xxx Seguidores xx Siguiendo */}
              <div className="flex items-center gap-6 pt-1 text-sm font-semibold">
                <div>
                  <span className="text-white font-bold">
                    {(seguidoresCount / 1000).toFixed(1)}k
                  </span>{' '}
                  <span className="text-gray-400">Seguidores</span>
                </div>
                <div>
                  <span className="text-white font-bold">{perfilActual.siguiendo}</span>{' '}
                  <span className="text-gray-400">Siguiendo</span>
                </div>
                <div>
                  <span className="text-white font-bold">{clips.length}</span>{' '}
                  <span className="text-gray-400">Clips</span>
                </div>
              </div>
            </div>

            {/* Divisor con filtros 🎮 y ordenación ⇅ según Wireframe */}
            <div className="mt-8 pt-5 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Filtro por juego con ícono de gamepad 🎮 */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                <span className="text-lg mr-1" title="Filtrar por juego">🎮</span>
                {['Todos', 'Overwatch', 'Helldivers 2'].map((juego) => (
                  <button
                    key={juego}
                    onClick={() => setJuegoFiltro(juego)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      juegoFiltro === juego
                        ? 'bg-[#d92759] text-white shadow-md shadow-[#d92759]/30'
                        : 'bg-[#222a37] text-gray-400 hover:text-white hover:bg-[#283242] border border-gray-800'
                    }`}
                  >
                    {juego}
                  </button>
                ))}
              </div>

              {/* Selector de orden ⇅ */}
              <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-semibold text-gray-400">
                <span className="text-base">⇅</span>
                <span>Ordenar:</span>
                <select
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                  className="bg-[#222a37] text-white border border-gray-700 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-[#d92759] cursor-pointer"
                >
                  <option value="recientes">Más recientes</option>
                  <option value="vistos">Más vistos</option>
                </select>
              </div>
            </div>

            {/* Rejilla 3x3 de Clips según Wireframe 2 (9 elementos) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clipsFiltrados.map((clip) => (
                <div
                  key={clip.id}
                  onClick={() => setClipSeleccionado(clip)}
                  className="bg-[#222a37] rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#d92759] transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {/* Miniatura de video con X / Icono de Play estilo wireframe */}
                  <div className="aspect-video bg-[#141922] relative overflow-hidden flex items-center justify-center">
                    {/* Líneas en X tipo wireframe sutil */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>

                    {/* Botón de reproducción interactivo */}
                    <div className="w-12 h-12 rounded-full bg-[#d92759] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#eb3369] transition duration-300 z-10">
                      <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    {/* Insignia de duración */}
                    <span className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur text-[11px] font-mono font-bold px-2 py-0.5 rounded text-white border border-white/10">
                      {clip.duracion}
                    </span>
                  </div>

                  {/* Metadatos del clip:
                      - Nombre clip
                      - [Icono] Juego
                      - yy vistas · hace x días */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-[#d92759] transition-colors">
                      {clip.titulo}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span className="text-[#d92759]">🎮</span>
                      <span className="font-semibold text-gray-300">{clip.juego}</span>
                    </div>

                    <p className="text-xs text-gray-500 font-mono">
                      {clip.vistas} · {clip.tiempo}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {clipsFiltrados.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                No se encontraron clips para este filtro.
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Modal Reproductor de Clip */}
      {clipSeleccionado && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a222f] border border-gray-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-700/60 bg-[#141922]">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎮</span>
                <div>
                  <h3 className="text-sm font-bold text-white">{clipSeleccionado.titulo}</h3>
                  <p className="text-xs text-gray-400">{perfilActual.nombre} · {clipSeleccionado.juego}</p>
                </div>
              </div>
              <button
                onClick={() => setClipSeleccionado(null)}
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video bg-black relative flex items-center justify-center group">
              {/* Pantalla de video simulada */}
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#d92759] text-white flex items-center justify-center mx-auto shadow-xl">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-xs font-mono text-gray-400">Reproduciendo {clipSeleccionado.resolucion}</p>
              </div>

              {/* Barra de progreso de video */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center gap-3 text-xs text-white">
                <span className="text-[11px] font-mono">0:14 / {clipSeleccionado.duracion}</span>
                <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-2/5 h-full bg-[#d92759]"></div>
                </div>
                <span className="text-[11px] font-mono">{clipSeleccionado.resolucion}</span>
              </div>
            </div>

            <div className="p-5 flex items-center justify-between bg-[#141922] text-xs">
              <span className="text-gray-400">{clipSeleccionado.vistas} · Publicado {clipSeleccionado.tiempo}</span>
              <button
                onClick={() => alert('¡Enlace de clip copiado al portapapeles!')}
                className="bg-[#222a37] hover:bg-[#2c3646] text-white font-bold px-4 py-2 rounded-xl transition border border-gray-700 cursor-pointer"
              >
                Compartir clip 🔗
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Mensaje Directo (DM) */}
      {mostrarModalDM && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a222f] border border-gray-700 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <span>💬</span> Mensaje Directo para {perfilActual.nombre}
              </h3>
              <button
                onClick={() => {
                  setMostrarModalDM(false);
                  setDmEnviado(false);
                }}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {dmEnviado ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <p className="font-bold text-white">¡Mensaje enviado con éxito!</p>
                <p className="text-xs text-gray-400">{perfilActual.nombre} recibirá tu notificación.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <textarea
                  rows={4}
                  value={mensajeDM}
                  onChange={(e) => setMensajeDM(e.target.value)}
                  placeholder={`Escribe tu mensaje para ${perfilActual.tag}...`}
                  className="w-full bg-[#141922] border border-gray-700 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d92759] resize-none"
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setMostrarModalDM(false)}
                    className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => {
                      if (mensajeDM.trim()) {
                        setDmEnviado(true);
                        setTimeout(() => {
                          setMostrarModalDM(false);
                          setDmEnviado(false);
                          setMensajeDM('');
                        }, 1800);
                      }
                    }}
                    className="px-5 py-2 text-xs font-bold bg-[#d92759] hover:bg-[#eb3369] text-white rounded-xl transition cursor-pointer"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            )}
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
