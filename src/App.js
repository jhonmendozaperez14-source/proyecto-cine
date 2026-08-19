import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Peliculas from './pages/Peliculas';
import Promociones from './pages/Promociones.jsx';
import Formulario from './pages/Formulario';
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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
