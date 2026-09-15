import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Navbar,
  Footer,
  UserProfileHeader,
  ClipCard,
  ClipModal,
  DirectMessageModal,
} from '../../Componentes';

export default function Usuario() {
  const { username } = useParams();

  // Base de datos de perfiles
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
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 2,
      titulo: 'Extracción en el último segundo',
      juego: 'Helldivers 2',
      vistas: '28.1k vistas',
      tiempo: 'hace 3 días',
      duracion: '0:48',
      resolucion: '4K 60fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 3,
      titulo: 'Widowmaker 360 no scope en King’s Row',
      juego: 'Overwatch',
      vistas: '42.9k vistas',
      tiempo: 'hace 5 días',
      duracion: '0:22',
      resolucion: '1080p 120fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 4,
      titulo: 'Baja cuádruple con la bomba de D.Va',
      juego: 'Overwatch',
      vistas: '11.8k vistas',
      tiempo: 'hace 1 semana',
      duracion: '0:29',
      resolucion: '1440p 60fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 5,
      titulo: 'Sobreviviendo a 3 Titanes de Bilis solo',
      juego: 'Helldivers 2',
      vistas: '34.2k vistas',
      tiempo: 'hace 1 semana',
      duracion: '1:12',
      resolucion: '4K 60fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 6,
      titulo: 'Salvo la partida en tiempo extra',
      juego: 'Overwatch',
      vistas: '19.7k vistas',
      tiempo: 'hace 2 semanas',
      duracion: '0:41',
      resolucion: '1440p 60fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 7,
      titulo: 'Robo épico de punto en Ilios Pozo',
      juego: 'Overwatch',
      vistas: '8.6k vistas',
      tiempo: 'hace 2 semanas',
      duracion: '0:31',
      resolucion: '1080p 60fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 8,
      titulo: 'Ataque orbital 500kg perfecto',
      juego: 'Helldivers 2',
      vistas: '22.3k vistas',
      tiempo: 'hace 3 semanas',
      duracion: '0:38',
      resolucion: '4K 60fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
    {
      id: 9,
      titulo: 'Nano Blade clutch en overtime',
      juego: 'Overwatch',
      vistas: '16.9k vistas',
      tiempo: 'hace 1 mes',
      duracion: '0:45',
      resolucion: '1440p 60fps',
      creador: perfilActual.tag.replace('@', ''),
      creadorNombre: perfilActual.nombre,
    },
  ];

  const handleToggleSeguir = () => {
    if (siguiendo) {
      setSiguiendo(false);
      setSeguidoresCount((prev) => prev - 1);
    } else {
      setSiguiendo(true);
      setSeguidoresCount((prev) => prev + 1);
    }
  };

  const clipsFiltrados = clips
    .filter((clip) => {
      if (juegoFiltro === 'Todos') return true;
      return clip.juego.toLowerCase().includes(juegoFiltro.toLowerCase());
    })
    .sort((a, b) => {
      if (orden === 'vistos') {
        return parseFloat(b.vistas) - parseFloat(a.vistas);
      }
      return a.id - b.id;
    });

  return (
    <div className="min-h-screen bg-[#141922] text-white font-sans flex flex-col selection:bg-[#d92759] selection:text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="bg-[#1a222f] border border-gray-700/60 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Cabecera del Perfil como componente modular */}
          <UserProfileHeader
            perfil={perfilActual}
            seguidoresCount={seguidoresCount}
            siguiendo={siguiendo}
            onToggleSeguir={handleToggleSeguir}
            onOpenDM={() => setMostrarModalDM(true)}
            clipsCount={clips.length}
          />

          <div className="px-6 sm:px-10 pb-10">
            {/* Divisor con filtros 🎮 y ordenación ⇅ según Wireframe */}
            <div className="pt-5 border-t border-gray-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              
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

            {/* Rejilla 3x3 de Clips utilizando ClipCard */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clipsFiltrados.map((clip) => (
                <ClipCard
                  key={clip.id}
                  clip={clip}
                  onClick={(c) => setClipSeleccionado(c)}
                  showCreator={false}
                  showGame={true}
                  creatorHandle={perfilActual.tag.replace('@', '')}
                  creatorName={perfilActual.nombre}
                />
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

      {/* Modal de Clip modular */}
      <ClipModal
        clip={clipSeleccionado}
        onClose={() => setClipSeleccionado(null)}
        creatorHandle={perfilActual.tag.replace('@', '')}
        creatorName={perfilActual.nombre}
      />

      {/* Modal de Mensaje Directo modular */}
      <DirectMessageModal
        isOpen={mostrarModalDM}
        onClose={() => setMostrarModalDM(false)}
        destinatario={perfilActual}
      />

      <Footer />
    </div>
  );
}
