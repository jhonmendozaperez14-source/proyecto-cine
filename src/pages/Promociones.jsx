import React, { useState } from 'react';
import './Promociones.css';

export default function Promociones() {
  const [modal, setModal] = useState({ visible: false, title: '', description: '' });
  const [filters, setFilters] = useState({ category: 'all', location: 'all' });

  const promotions = [
    {
      id: 1,
      title: 'Martes de película',
      description: 'Compra una entrada y recibe otra gratis todos los martes.',
      category: 'tickets',
      location: 'all',
      discount: '2x1',
      type: 'ENTRADAS',
      image: 'ticket-image'
    },
    {
      id: 2,
      title: 'Combo de película',
      description: 'Combo grande de palomitas y bebida con 25% de descuento.',
      category: 'food',
      location: 'all',
      discount: '-25%',
      type: 'ALIMENTOS',
      image: 'food-image'
    },
    {
      id: 3,
      title: 'CineMax Rewards',
      description: 'Acumula puntos con tus compras y canjéalos por diferentes beneficios.',
      category: 'rewards',
      location: 'all',
      discount: 'REWARDS',
      type: 'REWARDS',
      image: 'rewards-image'
    },
    {
      id: 4,
      title: 'Cine en familia',
      description: 'Disfruta precios especiales en funciones familiares seleccionadas.',
      category: 'family',
      location: 'all',
      discount: 'FAMILIA',
      type: 'FAMILIA',
      image: 'family-image'
    },
    {
      id: 5,
      title: 'Funciones especiales',
      description: 'Consulta las películas participantes y horarios disponibles.',
      category: 'tickets',
      location: 'lima',
      discount: '$5',
      type: 'ESPECIAL',
      image: 'special-image'
    },
    {
      id: 6,
      title: 'Dulcería 2x1',
      description: 'Promoción válida en productos seleccionados de dulcería.',
      category: 'food',
      location: 'callao',
      discount: '2x1',
      type: 'DULCERÍA',
      image: 'snack-image'
    }
  ];

  const scrollToPromotions = () => {
    const promotionsSection = document.getElementById('promotions');
    if (promotionsSection) {
      promotionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const showPromotion = (title, description) => {
    setModal({ visible: true, title, description });
  };

  const closeModal = () => {
    setModal({ ...modal, visible: false });
  };

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [id === 'categoryFilter' ? 'category' : 'location']: value
    }));
  };

  const filteredPromotions = promotions.filter(promo => {
    const categoryMatch = filters.category === 'all' || promo.category === filters.category;
    const locationMatch = filters.location === 'all' || promo.location === filters.location;
    return categoryMatch && locationMatch;
  });

  return (
    <>
      <main className="site-main" style={{ paddingTop: '2rem' }}>
        <section className="hero">
          <div className="hero-content">
            <span className="tag">PROMOCIONES</span>
            <h1>
              Disfruta más cine<br />
              por menos
            </h1>
            <p>
              Descubre nuestras promociones especiales,
              descuentos y beneficios exclusivos.
            </p>
            <button className="primary-btn" onClick={scrollToPromotions}>
              Ver promociones
            </button>
          </div>
        </section>

        <section className="filters">
          <h2>Encuentra tu promoción</h2>
          <div className="filter-container">
            <select id="categoryFilter" value={filters.category} onChange={handleFilterChange}>
              <option value="all">Todas las promociones</option>
              <option value="tickets">Entradas</option>
              <option value="food">Alimentos</option>
              <option value="rewards">Rewards</option>
              <option value="family">Familia</option>
            </select>

            <select id="locationFilter" value={filters.location} onChange={handleFilterChange}>
              <option value="all">Todos los cines</option>
              <option value="lima">CineMax Lima</option>
              <option value="callao">CineMax Callao</option>
              <option value="miraflores">CineMax Miraflores</option>
            </select>
          </div>
        </section>

        <section id="promotions" className="promotions-section">
          <div className="section-title">
            <div>
              <span>OFERTAS DESTACADAS</span>
              <h2>Promociones actuales</h2>
            </div>
          </div>

          <div className="promotion-grid">
            {filteredPromotions.map(promo => (
              <article
                key={promo.id}
                className="promotion-card"
                data-category={promo.category}
                data-location={promo.location}
              >
                <div className={`promotion-image ${promo.image}`}>
                  <span className="discount">{promo.discount}</span>
                </div>

                <div className="promotion-content">
                  <span className="promotion-type">{promo.type}</span>
                  <h3>{promo.title}</h3>
                  <p>{promo.description}</p>
                  <button
                    className="details-btn"
                    onClick={() => showPromotion(promo.title, promo.description)}
                  >
                    Ver detalles
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rewards">
          <div className="rewards-content">
            <span>ÚNETE A NUESTRO PROGRAMA</span>
            <h2>Cada visita puede darte una recompensa</h2>
            <p>
              Regístrate gratis, acumula puntos y
              disfruta beneficios exclusivos.
            </p>
            <button className="primary-btn">Crear cuenta</button>
          </div>

          <div className="rewards-card">
            <div className="star">★</div>
            <h3>CineMax Rewards</h3>
            <p>Puntos por tus compras</p>
            <strong>+ BENEFICIOS</strong>
          </div>
        </section>
      </main>

      {modal.visible && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <button className="close" onClick={closeModal}>×</button>
            <span>PROMOCIÓN</span>
            <h2>{modal.title}</h2>
            <p>{modal.description}</p>
            <div className="terms">
              <strong>Términos y condiciones</strong>
              <p>
                Promoción sujeta a disponibilidad.
                Aplican restricciones. Consulta las
                condiciones vigentes en tu cine.
              </p>
            </div>
            <button className="primary-btn" onClick={closeModal}>
              Entendido
            </button>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">Cinemas</div>
          <div className="footer-copy">© {new Date().getFullYear()} Cinemas. Todos los derechos reservados.</div>
        </div>
      </footer>
    </>
  );
}
