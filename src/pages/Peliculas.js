import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos-css/peliculas.css';
import Boton from '../components/Boton';

import peliculas from '../peliculasData';

export default function Peliculas({ mostrarCabecera = true }) {
  const peliculasRef = useRef(null);
  const navigate = useNavigate();
  const contenido = (
    <main className="peliculas-main">
      <div className="container peliculas-container">
        <div className="peliculas-header-strip">
          <span className="peliculas-badge">PG</span>
          <span className="peliculas-punto">•</span>
          <span className="peliculas-texto">Aventura</span>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" type="button" aria-label="Anterior" onClick={() => { const el = peliculasRef.current; if (el) el.scrollBy({ left: -el.clientWidth * 0.7, behavior: 'smooth' }); }}>‹</button>

          <div className="peliculas-grid" ref={peliculasRef}>
            {peliculas.map((pelicula) => (
              <article className="pelicula-card" key={pelicula.id}>
              <button className="play-btn" aria-label={`Reproducir ${pelicula.title}`} type="button">
                ▶
              </button>

              <div className="card-icons">
                <button type="button" aria-label="Agregar a favoritos">☆</button>
                <button type="button" aria-label="Agregar a lista">♡</button>
              </div>

              <div className="pelicula-poster">
                {/* Mostrar imagen de la película desde peliculasData: pelicula.image */}
                <img src={pelicula.image} alt={pelicula.title} />
              </div>

              <div className="pelicula-meta">
                <div className="pelicula-info">
                  <h3>{pelicula.title}</h3>
                  <p>
                    <span className="meta-rating">{pelicula.rating}</span>
                    <span className="meta-separator">•</span>
                    <span>{pelicula.genero}</span>
                  </p>
                </div>

                {/* Navegar a boletería pasando el id de la película en state (movieId) */}
                <button className="pelicula-cta" type="button" onClick={() => navigate('/boleteria', { state: { movieId: pelicula.id } })}>{pelicula.btn}</button>
              </div>

              <div className="card-bottom">
                <div className="acciones-card">
                  <button type="button" className="small-btn">Funciones</button>
                  <input type="text" aria-label="Buscar función" className="buscador-funcion" />
                </div>
              </div>
            </article>
          ))}
          </div>

          <button className="carousel-arrow right" type="button" aria-label="Siguiente" onClick={() => { const el = peliculasRef.current; if (el) el.scrollBy({ left: el.clientWidth * 0.7, behavior: 'smooth' }); }}>›</button>
        </div>
      </div>
    </main>
  );

  if (!mostrarCabecera) {
    return contenido;
  }

  return (
    <div className="peliculas-page">
      {contenido}
    </div>
  );
}
