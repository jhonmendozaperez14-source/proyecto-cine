import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../estilos-css/boleteria.css';

import cines from '../cinesData';
import peliculas from '../peliculasData';

const sucursales = cines; // usa cinemas data

const horarios = ['12:00', '15:30', '18:45', '21:00'];

export default function Boleteria() {
  const location = useLocation();
  const incoming = (location && location.state) || {};

  const initialSucursal = sucursales[0].id;
  const initialHora = horarios[0];

  // determine initial pelicula id: support incoming.movieId or incoming.movieTitle
  const initialPelicula = (() => {
    if (incoming.movieId) return incoming.movieId;
    if (incoming.movieTitle) {
      const found = peliculas.find((p) => p.title === incoming.movieTitle);
      if (found) return found.id;
    }
    return peliculas[0].id;
  })();

  const [sucursal, setSucursal] = useState(initialSucursal);
  const [pelicula, setPelicula] = useState(initialPelicula);
  const [hora, setHora] = useState(initialHora);
  const [cantidad, setCantidad] = useState(1);
  const [ticket, setTicket] = useState(null);

  // Este es el selectedMovie: objeto de la película seleccionada (desde peliculasData)
  const selectedMovie = peliculas.find((p) => p.id === pelicula) || peliculas[0];
  const price = selectedMovie ? selectedMovie.basePrice * cantidad : 0;

  function handleComprar() {
    // crea un ojeto tike y lo muestra en la interfaz del usuario
    const id = `T-${Date.now().toString().slice(-6)}`;
    const ticketObj = {
      id,
      sucursal: sucursales.find(s => s.id === sucursal).name,
      pelicula: selectedMovie.title,
      hora,
      cantidad,
      total: price,
      imagen: selectedMovie.image
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
              {peliculas.map((p) => (
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
            <div className="boleteria-summary-image">
              {/* Imagen de la película seleccionada (desde peliculasData: selectedMovie.image) */}
              <img src={selectedMovie.image} alt={selectedMovie.title} />
            </div>
          </aside>
        </div>

        {ticket && (
          <div className="ticket-modal">
            <div className="ticket-card">
              <div className="ticket-left">
                {/* Imagen usada en el ticket (se copia desde selectedMovie.image al crear el ticket) */}
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
