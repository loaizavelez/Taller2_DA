export default function UserProfileHeader({
  perfil,
  seguidoresCount,
  siguiendo,
  onToggleSeguir,
  onOpenDM,
  clipsCount,
}) {
  return (
    <div>
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

        {/* Botón de opciones '...' */}
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 mb-5 gap-4">
          <div className="flex items-end gap-5">
            <div className="relative">
              <div
                className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr ${perfil.avatarColor} p-1 shadow-2xl ring-4 ring-[#1a222f]`}
              >
                <div className="w-full h-full rounded-full bg-[#141922] flex items-center justify-center text-3xl sm:text-4xl font-black text-white">
                  {perfil.nombre.charAt(0)}
                </div>
              </div>
              <div
                className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-[#1a222f]"
                title="En línea"
              ></div>
            </div>

            <div className="space-y-1 mb-2">
              <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                {perfil.nombre}
                <span className="text-[#d92759]" title="Creador Verificado">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
              </h1>
              <p className="text-sm font-bold text-gray-400 font-mono">
                {perfil.tag}
              </p>
            </div>
          </div>

          {/* Botones de acción: [Seguir] y [DM] */}
          <div className="flex items-center gap-3 sm:mb-2">
            <button
              onClick={onToggleSeguir}
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
              onClick={onOpenDM}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-[#222a37] hover:bg-[#2a3648] text-white border border-gray-700/60 transition cursor-pointer flex items-center gap-2 shadow-md"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              DM
            </button>
          </div>
        </div>

        {/* Descripción del usuario */}
        <div className="space-y-3 max-w-3xl">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {perfil.bio}
          </p>

          {/* Estadísticas de Seguidores */}
          <div className="flex items-center gap-6 pt-1 text-sm font-semibold">
            <div>
              <span className="text-white font-bold">
                {(seguidoresCount / 1000).toFixed(1)}k
              </span>{' '}
              <span className="text-gray-400">Seguidores</span>
            </div>
            <div>
              <span className="text-white font-bold">{perfil.siguiendo}</span>{' '}
              <span className="text-gray-400">Siguiendo</span>
            </div>
            <div>
              <span className="text-white font-bold">{clipsCount}</span>{' '}
              <span className="text-gray-400">Clips</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
