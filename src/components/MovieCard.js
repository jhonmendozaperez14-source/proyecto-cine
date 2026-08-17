import React from 'react';
import './moviecard.css';

export default function MovieCard({ title, img }) {
  return (
    <article className="movie-card">
      <div className="movie-poster">
        <img src={img} alt={title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-actions">
          <button className="btn btn-small">Funciones</button>
          <button className="btn btn-small btn-outline">Detalles</button>
        </div>
      </div>
    </article>
  );
}
