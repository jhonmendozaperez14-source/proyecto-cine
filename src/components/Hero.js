import React from 'react';

export default function Hero() {
  const imageUrl = 'https://picsum.photos/1200/400?random=1'; // placeholder banner
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-overlay">
        <div className="container">
          <h1 className="hero-title">Las mejores películas en cartelera</h1>
          <p className="hero-sub">Compra tus boletos fácilmente y disfruta la experiencia</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#cartelera">Ver funciones</a>
            <a className="btn btn-secondary" href="#promos">Promociones</a>
          </div>
        </div>
      </div>
    </section>
  );
}
