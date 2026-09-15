import { Link } from 'react-router-dom';
import Navbar from '../../Componentes/Navbar';

export default function Features() {
  const caracteristicas = [
    {
      id: 'deteccion-eventos',
      titulo: 'Detección de eventos',
      subtitulo: 'Captura inteligente sin pulsar ninguna tecla',
      descripcion:
        'Clipped monitorea la partida en tiempo real mediante un motor de reconocimiento de eventos de juego. Ya sea que consigas un tiro a la cabeza, una baja cuádruple o captures la bandera en el último segundo, el sistema identifica el momento clave y genera un clip automático con los segundos previos y posteriores.',
      alineacion: 'texto-izquierda', // Texto izquierda, Gráfico derecha
      grafico: (
        <div className="w-full bg-[#141922] border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#d92759]/60 transition-all duration-300">
          {/* Header del Mockup */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">En vivo · Overwatch</span>
            </div>
            <span className="text-xs text-gray-500 font-mono">Buffer: 60s Activo</span>
          </div>

          {/* Evento detectado */}
          <div className="space-y-4">
            <div className="bg-[#222a37] p-4 rounded-xl border border-gray-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d92759]/20 text-[#d92759] flex items-center justify-center font-black">
                  🎯
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Evento: Pentakill en Punto B</h4>
                  <p className="text-xs text-gray-400">Duración: 0:35 · Resolución: 1440p 60fps</p>
                </div>
              </div>
              <span className="text-[11px] bg-[#d92759] text-white px-2.5 py-1 rounded-full font-bold">
                Auto-Guardado
              </span>
            </div>

            {/* Barra de estado del búfer */}
            <div className="bg-[#1a222f] p-3 rounded-xl border border-gray-800 space-y-2">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Marcador de inicio: -25s</span>
                <span className="text-emerald-400 font-semibold">Momento crítico</span>
                <span>Final: +10s</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden flex">
                <div className="w-1/3 bg-gray-700"></div>
                <div className="w-1/3 bg-[#d92759] shadow-[0_0_10px_#d92759]"></div>
                <div className="w-1/3 bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Listo para compartir
              </span>
              <span className="text-[#d92759] font-medium cursor-pointer hover:underline">Previsualizar clip →</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'overlay-personalizable',
      titulo: 'Overlay personalizable',
      subtitulo: 'Control discreto sin interrumpir tu rendimiento',
      descripcion:
        'Configura y consulta el estado de tus grabaciones directamente dentro del juego con una interfaz transparente y ultraligera. Personaliza la opacidad, la posición en pantalla, el indicador de grabación discreto y las combinaciones de teclas rápidas según tu estilo de juego.',
      alineacion: 'grafico-izquierda', // Gráfico izquierda, Texto derecha
      grafico: (
        <div className="w-full bg-[#141922] border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#d92759]/60 transition-all duration-300">
          {/* Header del Mockup */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">Clipped HUD Overlay</span>
            </div>
            <span className="text-xs bg-[#222a37] text-gray-300 px-2 py-0.5 rounded font-mono border border-gray-700">
              165 FPS · 0.1% CPU
            </span>
          </div>

          {/* Opciones del Overlay */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#222a37] rounded-xl border border-gray-700/50">
              <div>
                <span className="text-sm font-semibold text-white block">Atajo de guardado</span>
                <span className="text-xs text-gray-400">Graba los últimos 60 segundos</span>
              </div>
              <kbd className="px-2.5 py-1 bg-[#141922] text-[#d92759] font-mono font-bold text-xs rounded border border-[#d92759]/40 shadow-inner">
                Alt + F10
              </kbd>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#222a37] rounded-xl border border-gray-700/50">
              <div>
                <span className="text-sm font-semibold text-white block">Indicador de estado</span>
                <span className="text-xs text-gray-400">Esquina superior derecha</span>
              </div>
              <div className="w-11 h-6 bg-[#d92759] rounded-full flex items-center justify-end px-1 shadow-sm">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#222a37] rounded-xl border border-gray-700/50">
              <div>
                <span className="text-sm font-semibold text-white block">Opacidad del HUD</span>
                <span className="text-xs text-gray-400">Nivel de transparencia: 65%</span>
              </div>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-[#d92759]"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'audio-multipista',
      titulo: 'Audio multipista',
      subtitulo: 'Mezcla independiente para juego, micrófono y chat',
      descripcion:
        'Clipped graba el sonido del juego, tu micrófono y las aplicaciones de voz como Discord en canales estéreo completamente independientes. Al editar el clip, puedes subir el volumen del juego, silenciar una tos de tu micrófono o quitar el audio de fondo sin comprometer la jugada.',
      alineacion: 'texto-izquierda', // Texto izquierda, Gráfico derecha
      grafico: (
        <div className="w-full bg-[#141922] border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#d92759]/60 transition-all duration-300">
          {/* Header del Mockup */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800/80">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#d92759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Mezclador Multipista (3 Canales)
            </span>
            <span className="text-xs text-emerald-400 font-mono">48 kHz · 24 bit</span>
          </div>

          {/* Faders y ecualizadores */}
          <div className="space-y-3.5">
            {/* Pista 1 */}
            <div className="bg-[#222a37] p-3 rounded-xl border border-gray-700/50 space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-white flex items-center gap-2">
                  🎮 Audio del Juego
                </span>
                <span className="text-[#d92759] font-mono">100% (0 dB)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-[#d92759] w-[92%]"></div>
                </div>
                <span className="text-[10px] text-gray-400 font-mono">ESTÉREO</span>
              </div>
            </div>

            {/* Pista 2 */}
            <div className="bg-[#222a37] p-3 rounded-xl border border-gray-700/50 space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-white flex items-center gap-2">
                  🎙️ Micrófono Principal
                </span>
                <span className="text-[#d92759] font-mono">85% (-2 dB)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-[78%]"></div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">FILTRADO</span>
              </div>
            </div>

            {/* Pista 3 */}
            <div className="bg-[#222a37] p-3 rounded-xl border border-gray-700/50 space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-white flex items-center gap-2">
                  💬 Discord / Chat de Voz
                </span>
                <span className="text-[#d92759] font-mono">75% (-4 dB)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-400 w-[65%]"></div>
                </div>
                <span className="text-[10px] text-gray-400 font-mono">AISLADO</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'captura-pantalla',
      titulo: 'Captura de pantalla',
      subtitulo: 'Fotos nítidas en ultra alta resolución con mapeo HDR',
      descripcion:
        'Inmortaliza los momentos visualmente deslumbrantes de tus partidas en calidad nativa sin compresión. Clipped aplica corrección de color HDR a SDR para que tus capturas se vean exactamente como las experimentas en tu monitor, y las copia de inmediato al portapapeles.',
      alineacion: 'grafico-izquierda', // Gráfico izquierda, Texto derecha
      grafico: (
        <div className="w-full bg-[#141922] border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-[#d92759]/60 transition-all duration-300">
          {/* Header del Mockup */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800/80">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#d92759]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Captura Instantánea
            </span>
            <span className="text-xs bg-[#d92759]/20 text-[#d92759] border border-[#d92759]/40 px-2 py-0.5 rounded font-mono font-semibold">
              4K · 3840x2160
            </span>
          </div>

          {/* Simulación de Captura */}
          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-[#222a37] via-[#1a222f] to-[#141922] rounded-xl border border-gray-700/60 relative overflow-hidden flex flex-col items-center justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(#d92759_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#d92759]/20 text-[#d92759] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-gray-300 font-semibold tracking-wider">
                  PNG Sin Pérdida (Lossless)
                </span>
              </div>

              {/* Botón flotante de copiado */}
              <div className="absolute bottom-3 right-3 bg-[#141922]/90 backdrop-blur border border-gray-700 text-xs text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Copiado al portapapeles
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-[#222a37] p-2.5 rounded-lg border border-gray-800 text-center">
                <span className="text-gray-400 block text-[11px]">HDR Tone Mapping</span>
                <span className="text-white font-bold">Activado (10-bit)</span>
              </div>
              <div className="bg-[#222a37] p-2.5 rounded-lg border border-gray-800 text-center">
                <span className="text-gray-400 block text-[11px]">Atajo de Captura</span>
                <span className="text-[#d92759] font-mono font-bold">F12 / PrintScreen</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#141922] text-white font-sans flex flex-col selection:bg-[#d92759] selection:text-white">
      {/* Navbar Reutilizable con enlace Features */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 flex-1 w-full space-y-16">
        
        {/* Cabecera principal según Wireframe 1:
            "Características de [C] CLIPPED" */}
        <section className="text-center space-y-4 pt-4">
          <p className="text-sm font-bold uppercase tracking-widest text-[#d92759]">
            Potencia tu contenido
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Características de
            </h1>
            <div className="flex items-center gap-3 bg-[#222a37] px-4 py-2 rounded-2xl border border-gray-700/60 shadow-lg">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#d92759] rounded-lg flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md shadow-[#d92759]/40">
                C
              </div>
              <span className="text-2xl sm:text-4xl font-black tracking-widest text-white">
                CLIPPED
              </span>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Todo lo que necesitas para grabar, editar y compartir tus mejores partidas sin comprometer los FPS.
          </p>
        </section>

        {/* Sección "Funcionamiento" según Wireframe 1 */}
        <section className="bg-[#222a37]/80 rounded-2xl border border-gray-700/60 p-8 sm:p-10 shadow-xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d92759]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d92759]/20 text-[#d92759] text-xs font-bold uppercase tracking-wider mb-4 border border-[#d92759]/30">
              <span>⚡</span> Arquitectura ultraligera
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-wide">
              Funcionamiento
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Clipped se ejecuta de manera invisible en segundo plano utilizando un búfer en memoria ultraligero
              respaldado por la aceleración por hardware de tu tarjeta gráfica (NVIDIA NVENC, AMD AMF o Intel QuickSync).
              El sistema mantiene continuamente los últimos minutos de tu partida en memoria circular; en el momento en
              que ocurre una gran jugada o presionas tu atajo configurado, el fragmento se codifica y se guarda al instante
              en disco sin congelamientos ni pérdidas de cuadros por segundo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-700/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#141922] flex items-center justify-center text-[#d92759] font-bold border border-gray-700">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Búfer Circular</h4>
                  <p className="text-xs text-gray-400">Sin desgaste en tu disco SSD</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#141922] flex items-center justify-center text-[#d92759] font-bold border border-gray-700">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Cero caída de FPS</h4>
                  <p className="text-xs text-gray-400">Rendimiento nativo en juegos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#141922] flex items-center justify-center text-[#d92759] font-bold border border-gray-700">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Nube Instantánea</h4>
                  <p className="text-xs text-gray-400">Genera links listos para enviar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divisor según el Wireframe */}
        <div className="border-b border-gray-800/80 my-8"></div>

        {/* 4 Secciones alternadas (Zigzag) según Wireframe 1:
            1. Detección de eventos (Texto Izq, Gráfico Der)
            2. Overlay personalizable (Gráfico Izq, Texto Der)
            3. Audio multipista (Texto Izq, Gráfico Der)
            4. Captura de pantalla (Gráfico Izq, Texto Der) */}
        <section className="space-y-20">
          {caracteristicas.map((item, index) => {
            const esTextoIzquierda = item.alineacion === 'texto-izquierda';

            return (
              <div
                key={item.id}
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
                    {item.titulo}
                  </h3>

                  <h4 className="text-lg font-bold text-[#d92759]">
                    {item.subtitulo}
                  </h4>

                  <p className="text-gray-300 text-base leading-relaxed">
                    {item.descripcion}
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
                  {item.grafico}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA final */}
        <section className="mt-20 bg-gradient-to-r from-[#222a37] via-[#2a3648] to-[#222a37] border border-gray-700/60 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            ¿Listo para no perderte ninguna jugada?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Descarga Clipped gratis para Windows y empieza a recopilar tus mejores momentos automáticamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/descargar"
              className="bg-[#d92759] hover:bg-[#eb3369] active:scale-95 text-white font-bold px-8 py-3.5 rounded-xl text-base shadow-lg shadow-[#d92759]/30 transition duration-300 cursor-pointer"
            >
              Descargar Ahora
            </Link>
            <Link
              to="/juegos"
              className="bg-[#141922] hover:bg-[#1a222f] text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl text-base border border-gray-700 transition duration-300 cursor-pointer"
            >
              Explorar Juegos
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-800/80 bg-[#141922] py-8 px-6 text-center text-sm text-gray-500">
        <p>© 2026 Clipped. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
