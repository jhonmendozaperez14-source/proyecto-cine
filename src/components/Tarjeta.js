import React from 'react';
import '../estilos-css/tarjeta.css';

export default function Tarjeta({ title, img }) {
  return (
    <article className="movie-card">
      <div className="movie-poster">
        <img src={img} alt={title} />
        <div className="movie-overlay">
          <div className="overlay-title">{title}</div>
          <a className="btn btn-primary" href="#funciones">Ver funciones</a>
        </div>
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
