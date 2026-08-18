import React from 'react';
import Boton from './Boton';
import '../estilos-css/tarjeta.css';

export default function Tarjeta({ title, img }) {
  return (
    <article className="tarjeta-pelicula">
      <div className="poster-pelicula">
        <img src={img} alt={title} />
        <div className="superposicion-pelicula">
          <div className="titulo-superposicion">{title}</div>
          <Boton href="#funciones" variante="primario" tamano="normal">Ver funciones</Boton>
        </div>
      </div>

      <div className="info-pelicula">
        <h3 className="titulo-pelicula">{title}</h3>
        <div className="acciones-pelicula">
          <Boton variante="primario" tamano="pequeno">Funciones</Boton>
          <Boton variante="borde" tamano="pequeno">Detalles</Boton>
        </div>
      </div>
    </article>
  );
}
