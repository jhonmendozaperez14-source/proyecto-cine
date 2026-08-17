import React from 'react';
import './cabecera.css';

export default function Cabecera() {
  return (
    <header className="cabecera">
      <div className="container cabecera-inner">
        <div className="logo">
          <a href="#home" className="logo-link">MiCine</a>
        </div>
        <nav className="navegacion-principal">
          <a href="#cartelera">Cartelera</a>
          <a href="#promos">Promociones</a>
          <a href="#sucursales">Sucursales</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="acciones-cabecera">
          <button className="btn btn-primary">Entradas</button>
        </div>
      </div>
    </header>
  );
}
