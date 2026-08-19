import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Peliculas from './pages/Peliculas';
import Promociones from './pages/Promociones.jsx';
import Cabecera from './components/Cabecera';

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/promociones" element={<Promociones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
