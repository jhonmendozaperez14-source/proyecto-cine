import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hoja-registro.css';

export default function HojaRegistro() {
  const navigate = useNavigate();
  const usuario = sessionStorage.getItem('usuarioRegistrado') || 'usuario';

  return (
    <main className="hoja-registro">
      <section className="registro-mensaje">
        <span className="registro-etiqueta">LUXURI CINEMAS</span>
        <h1>¡Felicidades, {usuario}!</h1>
        <p>Felicidades por registrarte a la suscripción mensual de Luxuri Cinemas.</p>
        <button className="registro-regresar" onClick={() => navigate('/formulario')}>
          Regresar a la pagina de inicio de sesión
        </button>
      </section>
    </main>
  );
}