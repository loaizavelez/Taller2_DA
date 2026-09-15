import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Descarga from './Pages/Descarga/Descarga';
import JuegosInicio from './Pages/juegosInicio';
import JuegoDetalle from './Pages/juegoDetalle';
import Features from './Pages/Features/Features';
import Usuario from './Pages/Usuario/Usuario';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Ruta principal / inicio */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruta de características (Wireframe 1) */}
        <Route path="/features" element={<Features />} />
        <Route path="/caracteristicas" element={<Features />} />

        {/* Ruta de descarga */}
        <Route path="/descargar" element={<Descarga />} />

        {/* Ruta de la sección de juegos */}
        <Route path="/juegos" element={<JuegosInicio />} />

        {/* Ruta de detalle del juego (con soporte para parámetro de juego) */}
        <Route path="/juegos/overwatch" element={<JuegoDetalle />} />
        <Route path="/juegos/:juegoId" element={<JuegoDetalle />} />

        {/* Ruta de perfil de usuario (Wireframe 2) */}
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuario/:username" element={<Usuario />} />
      </Routes>
    </HashRouter>
  );
}

export default App;