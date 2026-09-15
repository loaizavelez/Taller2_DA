import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // Tailwind: Fondo azul marino oscuro
    <header className="flex items-center justify-between px-10 py-5 bg-[#141922] border-b border-gray-800/50">
      <Link to="/" className="flex items-center gap-3 cursor-pointer">
        {/* Tailwind: Cuadro magenta frambuesa */}
        <div className="w-8 h-8 bg-[#d92759] rounded flex items-center justify-center text-white font-black text-lg">
          C
        </div>
        <span className="text-xl font-black tracking-widest text-white">CLIPPED</span>
      </Link>
      
      <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium">
        <Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link>
        <Link to="/features" className="text-gray-400 hover:text-white transition">Features</Link>
        <Link to="/juegos" className="text-gray-400 hover:text-white transition">Juegos</Link>
        <button className="bg-[#222a37] hover:bg-[#2c3646] text-white px-5 py-2.5 rounded-lg transition border border-gray-700/50 font-semibold cursor-pointer">
          Iniciar sesión
        </button>
      </nav>
    </header>
  );
}