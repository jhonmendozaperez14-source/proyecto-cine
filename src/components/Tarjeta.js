import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos-css/tarjeta.css';

export default function Tarjeta({ title, img, id }) {
  const navigate = useNavigate();

  function openFunciones() {
    navigate('/boleteria', { state: { movieId: id } });
  }

  return (
    <article className="tarjeta-pelicula">
      <div className="poster-pelicula">
        {/* Aquí  renderiza la imagen que llega en la prop 'img' */}
        <img src={img} alt={title} />
        <div className="superposicion-pelicula">
          <div className="titulo-superposicion">{title}</div>
          <button onClick={openFunciones} className="boton boton-primario">Ver funciones</button>
        </div>
      </div>

      <div className="info-pelicula">
        <h3 className="titulo-pelicula">{title}</h3>
        <div className="acciones-pelicula">
          <button onClick={openFunciones} className="boton boton-primario boton-pequeno">Funciones</button>
          <button className="boton boton-borde boton-pequeno">Detalles</button>
        </div>
      </div>
    </article>
  );
}
