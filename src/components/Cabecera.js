import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../estilos-css/cabecera.css';

export default function Cabecera() {
  const [menuAbierto, setMenuAbierto] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuAbierto(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggleMenu(menu) {
    setMenuAbierto((actual) => (actual === menu ? null : menu));
  }

  return (
    <>
      <div className="barra-superior">
        <div className="container barra-inner">
          <div className="ubicacion-selector">
            <button className="ubicacion-btn" aria-expanded="false" type="button">
              <span className="ubicacion-text">SELECCIONE UNA UBICACIÓN</span>
            </button>
          </div>
        </div>
      </div>

      <header className="cabecera">
        <div className="container cabecera-inner">

          <div className="logo">
            <Link to="/" className="logo-link">Cinemas</Link>
            <div className="logo-sub">LUXURY CINEMAS</div>
          </div>

          <div className="acciones-cabecera">
            <button className="icon-btn usuario" aria-label="Cuenta" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              </svg>
            </button>
          </div>
        </div>

        <nav ref={navRef} className="nav-secundaria">
          <div className="nav-item"><Link to="/peliculas">PELÍCULAS</Link></div>
          <div className="nav-item"><Link to="/menu">MENÚ</Link></div>
          <div className="nav-item"><Link to="/promociones">PROMOCIONES</Link></div>
          <div className="nav-item">
          </div>

          <div className={`nav-item ${menuAbierto === 'mas' ? 'open' : ''}`}>
            <button type="button" className="nav-button" onClick={() => toggleMenu('mas')}>
              MÁS ▾
            </button>
           <div className={`submenu ${menuAbierto === 'mas' ? 'open' : ''}`}>
           <Link to="/sucursales">SUCURSALES</Link>
          </div>
          </div>
        </nav>
      </header>
    </>
  );
}
