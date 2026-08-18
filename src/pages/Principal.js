import React from 'react';
import Cabecera from '../components/Cabecera';
import Banner from '../components/Banner';
import Tarjetas from '../components/Tarjetas';
import '../pages/Principal.css';
export default function Principal() {
  return (
    <div className="site">
      <Cabecera />
      <main className="site-main">
        <Banner />
        <section className="container">
          <h2 className="section-title">Cartelera</h2>
          <Tarjetas />
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">Cinemas</div>
          <div className="footer-copy">© {new Date().getFullYear()} Cinemas. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
