import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../estilos-css/boleteria.css';

const sucursales = [
  { id: 's1', name: 'Centro Comercial A' },
  { id: 's2', name: 'Plaza Norte' },
  { id: 's3', name: 'Mall Sur' }
];

const peliculasEjemplo = [
  { id: 'p1', title: 'La odisea', basePrice: 18, img: '/imagenes/odicea.jpg' },
  { id: 'p2', title: 'Sólo una noche', basePrice: 22, img: '/imagenes/avenger.jpg' },
  { id: 'p3', title: 'El borde de la guerra', basePrice: 20, img: '/imagenes/spider-man.jpg' }
];

const horarios = ['12:00', '15:30', '18:45', '21:00'];

export default function Boleteria() {
  const location = useLocation();
  const incoming = (location && location.state) || {};

  const initialSucursal = sucursales[0].id;
  const initialPelicula = incoming.movieId || peliculasEjemplo[0].id;
  const initialHora = horarios[0];

  const [sucursal, setSucursal] = useState(initialSucursal);
  const [pelicula, setPelicula] = useState(initialPelicula);
  const [hora, setHora] = useState(initialHora);
  const [cantidad, setCantidad] = useState(1);
  const [ticket, setTicket] = useState(null);

  const selectedMovie = peliculasEjemplo.find((p) => p.id === pelicula) || peliculasEjemplo[0];
  const price = selectedMovie ? selectedMovie.basePrice * cantidad : 0;

  function handleComprar() {
    // create a ticket object and show it in the UI
    const id = `T-${Date.now().toString().slice(-6)}`;
    const ticketObj = {
      id,
      sucursal: sucursales.find(s => s.id === sucursal).name,
      pelicula: selectedMovie.title,
      hora,
      cantidad,
      total: price,
      imagen: selectedMovie.img
    };

    setTicket(ticketObj);
  }

  function closeTicket() {
    setTicket(null);
  }

  return (
    <main className="boleteria-page">
      <div className="container boleteria-container">
        <h1>Boletería</h1>
        <p className="boleteria-sub">Selecciona sucursal, película, horario y cantidad.</p>

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

            <div className="boleteria-movie">
              <div className="boleteria-movie-img"><img src={selectedMovie.img} alt={selectedMovie.title} /></div>
              <div>
                <p className="boleteria-movie-title">{selectedMovie.title}</p>
                <p className="boleteria-movie-meta">Precio por unidad: S/ {selectedMovie.basePrice}</p>
              </div>
            </div>

            <div className="boleteria-details">
              <p><strong>Sucursal:</strong> {sucursales.find(s => s.id === sucursal).name}</p>
              <p><strong>Horario:</strong> {hora}</p>
              <p><strong>Cantidad:</strong> {cantidad}</p>
              <div className="boleteria-total">Total: S/ {price}</div>
            </div>
          </aside>
        </div>

        {ticket && (
          <div className="ticket-modal">
            <div className="ticket-card">
              <div className="ticket-left">
                <img src={ticket.imagen} alt={ticket.pelicula} />
              </div>
              <div className="ticket-right">
                <h2>Entrada</h2>
                <p className="ticket-id">#{ticket.id}</p>

                        <div className="ticket-detail-row">
                          <div className="ticket-detail-label">Película</div>
                          <div className="ticket-detail-value"><strong>{ticket.pelicula}</strong></div>
                        </div>

                        <div className="ticket-detail-row">
                          <div className="ticket-detail-label">Sucursal</div>
                          <div className="ticket-detail-value">{ticket.sucursal}</div>
                        </div>

                        <div className="ticket-detail-row">
                          <div className="ticket-detail-label">Horario</div>
                          <div className="ticket-detail-value">{ticket.hora}</div>
                        </div>

                        <div className="ticket-detail-row">
                          <div className="ticket-detail-label">Cantidad</div>
                          <div className="ticket-detail-value">{ticket.cantidad}</div>
                        </div>

                        <div className="ticket-detail-row">
                          <div className="ticket-detail-label">Precio unitario</div>
                          <div className="ticket-detail-value">S/ {Math.round((ticket.total / ticket.cantidad) * 100) / 100}</div>
                        </div>

                        <div className="ticket-detail-row">
                          <div className="ticket-detail-label">Total</div>
                          <div className="ticket-detail-value ticket-total">S/ {ticket.total}</div>
                        </div>

                        <div className="ticket-actions">
                          <button onClick={closeTicket} className="ticket-close">Cerrar</button>
                        </div>
                      </div>
                    </div>
          </div>
        )}
      </div>
    </main>
  );
}
