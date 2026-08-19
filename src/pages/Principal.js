import React from 'react';
import Banner from '../components/Banner';
import Tarjetas from '../components/Tarjetas';
import Footer from '../components/Footer';
import '../pages/Principal.css';

export default function Principal() {
  return (
    <div className="site">
      <main className="site-main">
        <Banner />
        <section className="section-pelicula container">
          <h2 className="section-title">Cartelera</h2>
          <Tarjetas />
        </section>
      </main>
      <Footer />
    </div>
  );
}
