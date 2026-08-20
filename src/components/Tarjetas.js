import React, { useRef } from 'react';
import Tarjeta from './Tarjeta';
import '../estilos-css/tarjetas.css';
import peliculas from '../peliculasData';

export default function Tarjetas() {
  const filaRef = useRef(null);

  const desplazarCarrusel = (direccion) => {
    if (!filaRef.current) return;
    filaRef.current.scrollBy({ left: direccion * 360, behavior: 'smooth' });
  };

  return (
    <div className="contenedor-tarjetas">
      <button className="flecha-tarjeta izquierda" onClick={() => desplazarCarrusel(-1)} aria-label="Anterior">‹</button>

      <div className="fila-tarjetas" ref={filaRef}>
        {peliculas.slice(0,6).map((pelicula) => (
          <div className="item-tarjeta" key={pelicula.id}>
            {/* Pasar imagen a Tarjeta: la prop 'img' recibe pelicula.image desde peliculasData */}
            <Tarjeta id={pelicula.id} title={pelicula.title} img={pelicula.image} trailer={pelicula.trailer} />
          </div>
        ))}
      </div>

      <button className="flecha-tarjeta derecha" onClick={() => desplazarCarrusel(1)} aria-label="Siguiente">›</button>
    </div>
  );
}
