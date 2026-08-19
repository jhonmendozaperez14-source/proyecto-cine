import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Peliculas from './pages/Peliculas';
import Promociones from './pages/Promociones.jsx';
import Formulario from './pages/Formulario';
import HojaRegistro from './pages/Hoja_Registro';
import Cabecera from './components/Cabecera';

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/hoja-registro" element={<HojaRegistro />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
