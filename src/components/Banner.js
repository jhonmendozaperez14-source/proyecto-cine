import React, { useState, useEffect, useRef } from 'react';
import Boton from './Boton';
import '../estilos-css/banner.css';

const slides = [
  { id: 1, title: 'Spider-Man: Un nuevo día', img: '/imagenes/spider-man.jpg' },
  { id: 2, title: 'Avengers: La batalla final', img: '/imagenes/avenger.jpg' },
  { id: 3, title: 'La odisea', img: '/imagenes/odicea.jpg' }
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
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
            style={{ '--bg-image': `url(${s.img})` }}
            aria-hidden={i !== index}
          >
            <div className="container banner-inner">
              <div className="banner-text">
                <h1 className="banner-title">{s.title}</h1>
                <p className="banner-sub">Compra tus boletos fácilmente y disfruta la experiencia</p>
                <div className="banner-ctas">
                  <Boton href="#cartelera" variante="primario" className="boton-banner boton-banner-primario">Entradas</Boton>
                  <Boton href="#promos" variante="borde" className="boton-banner boton-banner-borde">Promociones</Boton>
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
