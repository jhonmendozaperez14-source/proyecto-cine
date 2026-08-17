import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          {/* Placeholder logo - replace with public/imagenes/logo.png later */}
          <a href="#home" className="logo-link">MiCine</a>
        </div>
        <nav className="main-nav">
          <a href="#cartelera">Cartelera</a>
          <a href="#promos">Promociones</a>
          <a href="#sucursales">Sucursales</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="header-actions">
          <button className="btn btn-primary">Entradas</button>
        </div>
      </div>
    </header>
  );
}
