import { Link } from 'react-router-dom';

export default function FeatureBlock({
  index,
  titulo,
  subtitulo,
  descripcion,
  grafico,
  alineacion = 'texto-izquierda',
}) {
  const esTextoIzquierda = alineacion === 'texto-izquierda';

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
        esTextoIzquierda ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Columna de Texto */}
      <div
        className={`lg:col-span-6 space-y-4 ${
          esTextoIzquierda ? 'order-1' : 'order-1 lg:order-2'
        }`}
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#d92759] font-bold uppercase tracking-wider">
          <span>// 0{index + 1}</span>
          <span>Módulo Integrado</span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
          {titulo}
        </h3>

        <h4 className="text-lg font-bold text-[#d92759]">
          {subtitulo}
        </h4>

        <p className="text-gray-300 text-base leading-relaxed">
          {descripcion}
        </p>

        <div className="pt-2">
          <Link
            to="/descargar"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#d92759] transition group cursor-pointer"
          >
            Probar en tus juegos
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Columna de Gráfico / Mockup */}
      <div
        className={`lg:col-span-6 flex justify-center ${
          esTextoIzquierda ? 'order-2' : 'order-2 lg:order-1'
        }`}
      >
        {grafico}
      </div>
    </div>
  );
}
