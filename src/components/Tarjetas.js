import React from 'react';
import Tarjeta from './Tarjeta';

const sampleMovies = [
  { id: 1, title: 'Aventura Épica', img: 'https://picsum.photos/300/430?random=11' },
  { id: 2, title: 'Comedia Familiar', img: 'https://picsum.photos/300/430?random=12' },
  { id: 3, title: 'Terror Nocturno', img: 'https://picsum.photos/300/430?random=13' },
  { id: 4, title: 'Drama Emotivo', img: 'https://picsum.photos/300/430?random=14' },
  { id: 5, title: 'Acción Sin Límites', img: 'https://picsum.photos/300/430?random=15' },
  { id: 6, title: 'Animación para Todos', img: 'https://picsum.photos/300/430?random=16' }
];

export default function Tarjetas() {
  return (
    <div className="movie-grid">
      {sampleMovies.map(m => (
        <Tarjeta key={m.id} title={m.title} img={m.img} />
      ))}
    </div>
  );
}
