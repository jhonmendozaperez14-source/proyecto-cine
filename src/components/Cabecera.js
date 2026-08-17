import React from 'react';
import './cabecera.css';

export default function Cabecera() {
  return (
    <>
      <div className="barra-superior">
        <div className="container barra-inner">
          <div className="ubicacion-selector">
            <button className="ubicacion-btn" aria-expanded="false">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2.2" fill="#fff" />
              </svg>
              <span className="ubicacion-text">SELECCIONE UNA UBICACIÓN</span>
            </button>
            <div className="ubicacion-dropdown" role="menu">
              <a href="#" role="menuitem">Ciudad A</a>
              <a href="#" role="menuitem">Ciudad B</a>
              <a href="#" role="menuitem">Ciudad C</a>
            </div>
          </div>
        </div>
      </div>

      <header className="cabecera">
        <div className="container cabecera-inner">
          <button className="icon-btn buscar" aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="11" cy="11" r="6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21l-4.35-4.35" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="logo">
            <a href="#home" className="logo-link">Cinemas</a>
            <div className="logo-sub">LUXURY CINEMAS</div>
          </div>

          <div className="acciones-cabecera">
            <button className="icon-btn usuario" aria-label="Cuenta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <nav className="nav-secundaria">
          <div className="nav-item"><a href="#peliculas">PELÍCULAS</a></div>
          <div className="nav-item"><a href="#menu">MENÚ</a></div>
          <div className="nav-item">
            <a href="#eventos">EVENTOS ▾</a>
            <div className="submenu">
              <a href="#eventos-corporativos">Corporativos</a>
              <a href="#eventos-especiales">Especiales</a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#mas">MÁS ▾</a>
            <div className="submenu">
              <a href="#sucursales">Sucursales</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
