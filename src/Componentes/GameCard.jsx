import { Link } from 'react-router-dom';

export default function GameCard({
  id,
  nombre,
  categoria,
  clipsCount,
  posicion,
  color = 'from-orange-500 to-[#d92759]',
}) {
  return (
    <Link
      to={`/juegos/${id}`}
      className="w-52 flex-shrink-0 cursor-pointer group block"
    >
      <div className="aspect-[3/4] bg-[#222a37] rounded-2xl group-hover:ring-2 ring-[#d92759] transition-all duration-300 relative w-full h-full flex flex-col justify-between p-4 overflow-hidden border border-gray-800/80 shadow-lg group-hover:-translate-y-1">
        {/* Gradiente temático de fondo */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${color} opacity-20 group-hover:opacity-30 transition-opacity`}
        ></div>

        {/* Insignia de Ranking (#1, #2, etc.) */}
        {posicion && (
          <span className="absolute -top-1 -right-1 text-[#d92759] font-black text-4xl drop-shadow-xl z-10 pr-3 pt-2">
            {posicion}
          </span>
        )}

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

        {/* Información del juego */}
        <div className="relative z-10 bg-[#141922]/90 backdrop-blur -mx-4 -mb-4 p-3 border-t border-gray-800">
          <h3 className="font-bold text-sm text-white group-hover:text-[#d92759] transition truncate">
            {nombre}
          </h3>
          <div className="flex items-center justify-between text-[11px] text-gray-400 mt-1">
            <span>{categoria}</span>
            <span className="text-[#d92759] font-semibold">{clipsCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
