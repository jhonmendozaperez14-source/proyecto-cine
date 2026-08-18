import React, { useRef } from 'react';
import Tarjeta from './Tarjeta';
import '../estilos-css/tarjetas.css';

const peliculasEjemplo = [
  { id: 1, title: 'Spider-Man: Un nuevo día', img: '/imagenes/spiderman-tar.jpg' },
  { id: 2, title: 'Paw Patrol: The Dino Movie', img: 'imagenes/paw-patrol.jpg' },
  { id: 3, title: 'El final de Oak Street', img: 'imagenes/final-Street.jpg' },
  { id: 4, title: 'La odisea', img: 'imagenes/odicea-tar.jpg' },
  { id: 5, title: 'Sólo una noche', img: 'imagenes/solouna-noche.jpg' },
  { id: 6, title: 'El borde', img: 'imagenes/border.jpg' }
];

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
        {peliculasEjemplo.map((pelicula) => (
          <div className="item-tarjeta" key={pelicula.id}>
            <Tarjeta title={pelicula.title} img={pelicula.img} />
          </div>
        ))}
      </div>

      <button className="flecha-tarjeta derecha" onClick={() => desplazarCarrusel(1)} aria-label="Siguiente">›</button>
    </div>
  );
}
