import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Peliculas from './pages/Peliculas';
import Menu from './pages/Menu';
import Promociones from './pages/Promociones.jsx';
import Formulario from './pages/Formulario';
import HojaRegistro from './pages/Hoja_Registro';
import Boleteria from './pages/Boleteria';
import Cabecera from './components/Cabecera';
import Sucursales from './pages/Sucursales';

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/boleteria" element={<Boleteria />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/hoja-registro" element={<HojaRegistro />} />
        <Route path="/sucursales" element={<Sucursales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
