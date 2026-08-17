import React, { useRef } from 'react';
import Tarjeta from './Tarjeta';
import './tarjetas.css';

const sampleMovies = [
  { id: 1, title: 'Spider-Man: Un nuevo día', img: 'https://picsum.photos/300/430?random=31' },
  { id: 2, title: 'Paw Patrol: The Dino Movie', img: 'https://picsum.photos/300/430?random=32' },
  { id: 3, title: 'El final de Oak Street', img: 'https://picsum.photos/300/430?random=33' },
  { id: 4, title: 'La odisea', img: 'https://picsum.photos/300/430?random=34' },
  { id: 5, title: 'Sólo una noche', img: 'https://picsum.photos/300/430?random=35' },
  { id: 6, title: 'El borde', img: 'https://picsum.photos/300/430?random=36' }
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
