import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos-css/banner.css';
import peliculas from '../peliculasData';

const slides = peliculas.slice(0, 3);

export default function Banner() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  function goPrev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function goNext() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <section className="banner carousel">
      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`slide ${i === index ? 'active' : ''}`}
            // Usa s.image como fondo del slide (imagen del banner tomada de peliculasData)
            style={{ '--bg-image': `url(${s.image})` }}
            aria-hidden={i !== index}
          >
            <div className="container banner-inner">
              <div className="banner-text">
                <h1 className="banner-title">{s.title}</h1>
                <p className="banner-sub">Compra tus boletos fácilmente y disfruta la experiencia</p>
                <div className="banner-ctas">
                  {/* Al hacer click pasamos el id de la película a la boletería mediante state: movieId */}
                  <button className="boton boton-primario boton-banner-primario" onClick={() => navigate('/boleteria', { state: { movieId: s.id } })}>Entradas</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-control prev" onClick={goPrev} aria-label="Anterior">‹</button>
        <button className="carousel-control next" onClick={goNext} aria-label="Siguiente">›</button>

        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <button key={i} className={`indicator ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} aria-label={`Ir a diapositiva ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
