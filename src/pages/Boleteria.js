import React, { useState } from 'react';
import '../estilos-css/boleteria.css';

const sucursales = [
  { id: 's1', name: 'Centro Comercial A' },
  { id: 's2', name: 'Plaza Norte' },
  { id: 's3', name: 'Mall Sur' }
];

const peliculasEjemplo = [
  { id: 'p1', title: 'La odisea', basePrice: 18 },
  { id: 'p2', title: 'Sólo una noche', basePrice: 22 },
  { id: 'p3', title: 'El borde de la guerra', basePrice: 20 }
];

const horarios = ['12:00', '15:30', '18:45', '21:00'];

export default function Boleteria() {
  const [sucursal, setSucursal] = useState(sucursales[0].id);
  const [pelicula, setPelicula] = useState(peliculasEjemplo[0].id);
  const [hora, setHora] = useState(horarios[0]);
  const [cantidad, setCantidad] = useState(1);

  const selectedMovie = peliculasEjemplo.find((p) => p.id === pelicula);
  const price = selectedMovie ? selectedMovie.basePrice * cantidad : 0;

  function handleComprar() {
    alert(`Compra simulada:\nSucursal: ${sucursal}\nPelícula: ${selectedMovie.title}\nHora: ${hora}\nCantidad: ${cantidad}\nTotal: S/ ${price}`);
  }

  return (
    <main className="boleteria-page">
      <div className="container boleteria-container">
        <h1>Boletería</h1>
        <p className="boleteria-sub">Selecciona sucursal, película, horario y cantidad. Esta es una simulación cliente-side.</p>

        <div className="boleteria-grid">
          <div className="boleteria-form">
            <label>Sucursal</label>
            <select value={sucursal} onChange={(e) => setSucursal(e.target.value)}>
              {sucursales.map((s) => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>

            <label>Película</label>
            <select value={pelicula} onChange={(e) => setPelicula(e.target.value)}>
              {peliculasEjemplo.map((p) => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>

            <label>Horario</label>
            <select value={hora} onChange={(e) => setHora(e.target.value)}>
              {horarios.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>

            <label>Cantidad</label>
            <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(Math.max(1, Number(e.target.value)))} />

            <div className="boleteria-actions">
              <button className="comprar-btn" onClick={handleComprar}>Comprar</button>
            </div>
          </div>

          <aside className="boleteria-summary">
            <h3>Resumen</h3>
            <p><strong>Sucursal:</strong> {sucursales.find(s => s.id === sucursal).name}</p>
            <p><strong>Película:</strong> {selectedMovie.title}</p>
            <p><strong>Horario:</strong> {hora}</p>
            <p><strong>Cantidad:</strong> {cantidad}</p>
            <div className="boleteria-total">Total: S/ {price}</div>
          </aside>
        </div>
      </div>
    </main>
  );
}
