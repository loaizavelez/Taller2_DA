import { Link } from 'react-router-dom';

export default function ClipModal({ clip, onClose, creatorName, creatorHandle }) {
  if (!clip) return null;

  const handle = clip.creador || creatorHandle;
  const nombre = clip.creadorNombre || creatorName || handle;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1a222f] border border-gray-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Cabecera del modal */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/60 bg-[#141922]">
          <div className="flex items-center gap-3">
            <span className="text-xl">🎮</span>
            <div>
              <h3 className="text-sm font-bold text-white">{clip.titulo}</h3>
              <p className="text-xs text-gray-400">
                {clip.juego ? `${clip.juego} · ` : ''}
                {handle ? `Clip de ${nombre} (@${handle})` : ''}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Reproductor de Video Simulado */}
        <div className="aspect-video bg-black relative flex items-center justify-center group">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#d92759] text-white flex items-center justify-center mx-auto shadow-xl">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xs font-mono text-gray-400">
              Reproduciendo {clip.resolucion || '1440p 60fps'}
            </p>
          </div>

          {/* Barra de progreso inferior */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center gap-3 text-xs text-white">
            <span className="text-[11px] font-mono">0:14 / {clip.duracion || '0:30'}</span>
            <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-2/5 h-full bg-[#d92759]"></div>
            </div>
            <span className="text-[11px] font-mono">{clip.resolucion || '1440p'}</span>
          </div>
        </div>

        {/* Barra inferior de acciones */}
        <div className="p-4 flex items-center justify-between bg-[#141922] text-xs">
          {handle ? (
            <Link
              to={`/usuario/${handle}`}
              onClick={onClose}
              className="text-[#d92759] font-bold hover:underline"
            >
              Ver perfil y más clips de @{handle} →
            </Link>
          ) : (
            <span className="text-gray-400">
              {clip.vistas} vistas · {clip.tiempo || clip.hace || 'Reciente'}
            </span>
          )}

          <button
            onClick={() => alert('¡Enlace del clip copiado al portapapeles!')}
            className="bg-[#222a37] hover:bg-[#2c3646] text-white font-bold px-4 py-2 rounded-xl transition border border-gray-700 cursor-pointer shadow"
          >
            Compartir clip 🔗
          </button>
        </div>

      </div>
    </div>
  );
}
