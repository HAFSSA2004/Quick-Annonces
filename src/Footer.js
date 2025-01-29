import React from "react";
import "./Footer.css"; // Create and link a CSS file for styles
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"; // FontAwesome Icons

function Footer() {
  return (
    
    <footer class="footer">
    
    <div class="footer-container">
      <div class="footer-links">
        <div class="footer-column">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Soluciones</a></li>
            <li><a href="#">Insights</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Categorías</h4>
          <ul>
            <li><a href="#">Contratar Talento</a></li>
            <li><a href="#">Desarrollar Talento</a></li>
            <li><a href="#">Herramientas de Gamificación</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>&nbsp;</h4>
          <ul>
            <li><a href="#">Competencias Digitales</a></li>
            <li><a href="#">Competencias Comerciales</a></li>
            <li><a href="#">Liderazgo</a></li>
          </ul>
        </div>
      </div>
  
      <div class="footer-bottom">
        <div class="social-icons">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
        </div>
        <div class="footer-policy">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Código de Conducta</a>
        </div>
      </div>
    </div>
  </footer>
  
  );
}

export default Footer;
