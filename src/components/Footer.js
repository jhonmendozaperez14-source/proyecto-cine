import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos-css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-contenido">

        {/* Información de Cinemas */}
        <div className="footer-columna">
          <h2>Cinemas</h2>
          <p>Luxury Cinemas</p>
          <p>Disfruta la mejor experiencia cinematográfica.</p>
        </div>


        {/* Enlaces */}
        <div className="footer-columna">
          <h3>ENLACES</h3>

          <Link to="/">Inicio</Link>
          <Link to="/peliculas">Películas</Link>
          <Link to="/menu">Menú</Link>
          <Link to="/promociones">Promociones</Link>
        </div>


        {/* Contacto */}
        <div className="footer-columna">
          <h3>CONTACTO</h3>

          <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer">
            WhatsApp
          </a>

          <a href="tel:+51999999999">
            +51 999 999 999
          </a>

          <a href="mailto:Luxurycinemas@cinemas.com">
            Luxurycinemas@cinemas.com
          </a>
        </div>


        {/* Redes sociales */}
        <div className="footer-columna">
          <h3>SÍGUENOS</h3>

          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="https://x.com/" target="_blank" rel="noreferrer">
            Twitter / X
          </a>
        </div>

      </div>


      {/* Parte inferior */}
      <div className="footer-inferior">

        <p>
          © {new Date().getFullYear()} Cinemas. Todos los derechos reservados.
        </p>

        <div>
          <a href="#">Términos y condiciones</a>
          <a href="#">Política de privacidad</a>
        </div>

      </div>

    </footer>
  );
}