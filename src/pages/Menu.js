import React, { useRef } from 'react';
import '../estilos-css/menu.css';

const menuItems = [
  {
    id: 1,
    title: 'Combo Canchita + Gaseosa',
    desc: 'Porción grande de canchita con bebida mediana',
    price: 'S/ 18.00',
    img: '/imagenes/canchita-bebida.jpg'
  },
  {
    id: 2,
    title: 'Hot Dog Clásico',
    desc: 'Pan suave con salchicha y salsa especial',
    price: 'S/ 12.00',
    img: '/imagenes/pan-salchicha.jpg'
  },
  {
    id: 3,
    title: 'Combo Nachos',
    desc: 'Nachos con queso y jalapeños',
    price: 'S/ 22.00',
    img: '/imagenes/nachos-jalapeños.jpg'
  },
  {
    id: 4,
    title: 'Pizza Personal',
    desc: 'Pizza Personal',
    price: 'S/ 20.00',
    img: '/imagenes/pizza.jpg'
  },
  {
    id: 5,
    title: 'Refresco',
    desc: 'coca-cola',
    price: 'S/ 6.00',
    img: '/imagenes/coca-cola.jpg'
  }
];

export default function Menu() {
  const carouselRef = useRef(null);

  function scrollBy(direction) {
    const el = carouselRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.7 * direction;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  return (
    <main className="menu-page">
      <div className="container menu-container">
        <header className="menu-header">
          <h1>Menú</h1>
          <p className="menu-sub">Canchita, combos y lo clásico del cine — elige y disfruta</p>
        </header>

        <div className="menu-carousel-wrapper">
          <button className="menu-arrow left" aria-label="Anterior" onClick={() => scrollBy(-1)}>‹</button>

          <div className="menu-carousel" ref={carouselRef}>
            {menuItems.map((item) => (
              <article className="menu-card" key={item.id}>
                <div className="menu-image">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="menu-body">
                  <h3>{item.title}</h3>
                  <p className="menu-desc">{item.desc}</p>
                  <div className="menu-footer">
                    <span className="menu-price">{item.price}</span>
                    <button className="menu-btn">Agregar</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="menu-arrow right" aria-label="Siguiente" onClick={() => scrollBy(1)}>›</button>
        </div>
      </div>
    </main>
  );
}
