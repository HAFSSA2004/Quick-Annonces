import React from "react";
import "./Footer.css"; // Assurez-vous que ce fichier existe et contient les styles nécessaires
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li><a href="/about">Sobre Nosotros</a></li>
              <li><a href="/solutions">Soluciones</a></li>
              <li><a href="/insights">Insights</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Categorías</h4>
            <ul>
              <li><a href="/talent-hiring">Contratar Talento</a></li>
              <li><a href="/talent-development">Desarrollar Talento</a></li>
              <li><a href="/gamification-tools">Herramientas de Gamificación</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Más Información</h4>
            <ul>
              <li><a href="/digital-skills">Competencias Digitales</a></li>
              <li><a href="/commercial-skills">Competencias Comerciales</a></li>
              <li><a href="/leadership">Liderazgo</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="footer-policy">
            <a href="/privacy-policy">Política de Privacidad</a>
            <a href="/terms">Términos y Condiciones</a>
            <a href="/code-of-conduct">Código de Conducta</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
