import React from 'react';
import cines from '../cinesData';
import '../estilos-css/Sucursales.css';

export default function Sucursales() {
  return (
    <main className="sucursales-container">

      <h1>Nuestras Sucursales</h1>

      <p className="subtitulo">
        Encuentra tu CineMax más cercano
      </p>

      <div className="cines-grid">

        {cines.map((cine) => (
          <div className="cine-card" key={cine.id}>

            <div className="cine-icon">
              🎬
            </div>

            <h2>{cine.name}</h2>

            <p>
              📍 <strong>Ubicación:</strong> {cine.ubicacion}
            </p>

            <p>
              🏢 <strong>Dirección:</strong> {cine.direccion}
            </p>

            <p>
              🕐 <strong>Horario:</strong> {cine.horario}
            </p>

          </div>
        ))}

      </div>

    </main>
  );
}