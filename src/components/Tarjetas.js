import React, { useRef } from 'react';
import Tarjeta from './Tarjeta';
import '../estilos-css/tarjetas.css';

const sampleMovies = [
  { id: 1, title: 'Spider-Man: Un nuevo día', img: '/imagenes/spiderman-tar.jpg' },
  { id: 2, title: 'Paw Patrol: The Dino Movie', img: 'imagenes/paw-patrol.jpg' },
  { id: 3, title: 'El final de Oak Street', img: 'imagenes/final-Street.jpg' },
  { id: 4, title: 'La odisea', img: 'imagenes/odicea-tar.jpg' },
  { id: 5, title: 'Sólo una noche', img: 'imagenes/solouna-noche.jpg' },
  { id: 6, title: 'El borde', img: 'imagenes/border.jpg' }
];

export default function Tarjetas() {
  const rowRef = useRef(null);

  function scrollLeft() {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: -360, behavior: 'smooth' });
  }
  function scrollRight() {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: 360, behavior: 'smooth' });
  }

  return (
    <div className="tarjetas-wrapper">
      <button className="scroll-btn left" onClick={scrollLeft} aria-label="Anterior">‹</button>
      <div className="tarjetas-row" ref={rowRef}>
        {sampleMovies.map(m => (
          <div className="tarjeta-item" key={m.id}>
            <Tarjeta title={m.title} img={m.img} />
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight} aria-label="Siguiente">›</button>
    </div>
  );
}
