import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Descarga from './Pages/Descarga/Descarga';
import JuegosInicio from './Pages/juegosInicio';
import JuegoDetalle from './Pages/juegoDetalle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal / inicio */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruta de descarga */}
        <Route path="/descargar" element={<Descarga />} />

        {/* Ruta de la sección de juegos */}
        <Route path="/juegos" element={<JuegosInicio />} />

        {/* Ruta de detalle del juego */}
        <Route path="/juegos/overwatch" element={<JuegoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;