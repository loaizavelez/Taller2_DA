import { Link } from 'react-router-dom';

export default function ClipCard({
  clip,
  onClick,
  showCreator = true,
  showGame = true,
  creatorHandle,
  creatorName,
}) {
  const tiempo = clip.tiempo || clip.hace || 'Reciente';
  const creador = clip.creador || creatorHandle;
  const nombreCreador = clip.creadorNombre || creatorName || creador;

  return (
    <div className="bg-[#222a37] rounded-2xl overflow-hidden border border-gray-700/60 hover:border-[#d92759] transition-all duration-300 group shadow-lg flex flex-col hover:-translate-y-1">
      {/* Miniatura interactiva de video */}
      <div
        onClick={() => onClick && onClick(clip)}
        className="aspect-video bg-[#141922] relative cursor-pointer overflow-hidden flex items-center justify-center"
      >
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#141922] via-[#243447] to-[#141922] opacity-80 group-hover:scale-105 transition-transform duration-500">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Botón de reproducción */}
        <div className="w-12 h-12 rounded-full bg-[#d92759] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#eb3369] transition duration-300 z-10">
          <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        {/* Insignia de duración */}
        {clip.duracion && (
          <span className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur text-[11px] font-mono font-bold px-2 py-0.5 rounded text-white border border-white/10">
            {clip.duracion}
          </span>
        )}

        {/* Insignia de Categoría o Juego en la miniatura */}
        {clip.categoria && (
          <span className="absolute top-2.5 left-2.5 bg-[#141922]/90 backdrop-blur text-[10px] font-bold text-gray-300 px-2 py-0.5 rounded border border-gray-700">
            {clip.categoria}
          </span>
        )}
      </div>

      {/* Contenido / Metadatos del clip */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={() => onClick && onClick(clip)}
            className="font-bold text-white text-sm hover:text-[#d92759] transition cursor-pointer line-clamp-1"
          >
            {clip.titulo}
          </h3>

          {/* Juego si se solicita mostrar */}
          {showGame && clip.juego && (
            <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1.5">
              <span className="text-[#d92759]">🎮</span>
              <span className="font-semibold text-gray-300">{clip.juego}</span>
            </div>
          )}

          <p className="text-xs text-gray-500 font-mono mt-1">
            {clip.vistas} · {tiempo}
          </p>
        </div>

        {/* Barra inferior: Creador o botón de ver jugada */}
        {showCreator && creador ? (
          <div className="pt-2 border-t border-gray-700/50 flex items-center justify-between text-xs">
            <Link
              to={`/usuario/${creador}`}
              className="flex items-center gap-2 group/user hover:opacity-90 transition"
              title={`Ver perfil de ${nombreCreador}`}
            >
              <div className="w-6 h-6 rounded-full bg-[#141922] flex items-center justify-center text-[10px] font-bold text-white group-hover/user:ring-2 ring-[#d92759] transition">
                {String(nombreCreador).charAt(0).toUpperCase()}
              </div>
              <span className="font-semibold text-gray-300 group-hover/user:text-[#d92759] transition truncate max-w-[140px]">
                @{creador}
              </span>
            </Link>

            <button
              onClick={() => onClick && onClick(clip)}
              className="text-[#d92759] hover:underline font-semibold cursor-pointer text-[11px]"
            >
              Ver clip →
            </button>
          </div>
        ) : (
          <div className="pt-2 border-t border-gray-700/50 flex items-center justify-end text-xs">
            <button
              onClick={() => onClick && onClick(clip)}
              className="text-[#d92759] hover:underline font-semibold cursor-pointer text-[11px]"
            >
              Reproducir clip →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
