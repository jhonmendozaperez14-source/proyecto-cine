import React, { useRef } from 'react';
import '../estilos-css/peliculas.css';
import Boton from '../components/Boton';

const peliculas = [
  {
    id: 1,
    title: 'La odisea',
    rating: 'PG',
    genero: 'Acción',
    image: '/imagenes/odicea.jpg',
    btn: 'ENTRADAS'
  },
  {
    id: 2,
    title: 'Sólo una noche',
    rating: 'R',
    genero: 'Comedia',
    image: '/imagenes/avenger.jpg',
    btn: 'ENTRADAS'
  },
  {
    id: 3,
    title: 'El borde de la guerra',
    rating: 'PG',
    genero: 'Drama',
    image: '/imagenes/spider-man.jpg',
    btn: 'ENTRADAS'
  },
  {
    id: 4,
    title: 'La odisea',
    rating: 'PG',
    genero: 'Acción',
    image: '/imagenes/odicea.jpg',
    btn: 'ENTRADAS'
  },
  {
    id: 5,
    title: 'Sólo una noche',
    rating: 'R',
    genero: 'Comedia',
    image: '/imagenes/avenger.jpg',
    btn: 'ENTRADAS'
  },
  {
    id: 6,
    title: 'El borde de la guerra',
    rating: 'PG',
    genero: 'Drama',
    image: '/imagenes/spider-man.jpg',
    btn: 'ENTRADAS'
  }
];

export default function Peliculas({ mostrarCabecera = true }) {
  const peliculasRef = useRef(null);
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

                <Boton href="/boleteria" className="pelicula-cta" variante="primario">{pelicula.btn}</Boton>
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
