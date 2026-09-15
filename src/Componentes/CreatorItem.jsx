import { Link } from 'react-router-dom';

export default function CreatorItem({ handle, rol, tipo = 'principal' }) {
  if (tipo === 'secundario') {
    return (
      <Link
        to={`/usuario/${handle}`}
        className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#141922] transition-colors group cursor-pointer"
        title={`Ver perfil de @${handle}`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#141922] flex items-center justify-center group-hover:ring-1 ring-[#d92759] transition">
            <span className="text-[10px] font-bold text-gray-400 group-hover:text-white">
              {handle.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-gray-400 font-medium text-xs group-hover:text-white transition-colors">
            @{handle}
          </span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono">
          {rol}
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={`/usuario/${handle}`}
      className="flex items-center justify-between p-2 rounded-xl hover:bg-[#141922] transition-all duration-200 group cursor-pointer border border-transparent hover:border-gray-800"
      title={`Ver perfil de @${handle}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#141922] flex items-center justify-center group-hover:ring-2 ring-[#d92759] transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-500 group-hover:text-[#d92759] transition-colors"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <span className="text-gray-200 font-bold text-sm tracking-wide group-hover:text-white block">
            @{handle}
          </span>
          <span className="text-[11px] text-gray-400">
            {rol}
          </span>
        </div>
      </div>

      <span className="text-xs text-[#d92759] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
        Ver Perfil →
      </span>
    </Link>
  );
}
