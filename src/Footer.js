import React from "react";
import "./Footer.css"; // Assurez-vous que ce fichier existe et contient les styles nécessaires
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="text-center mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer-section">
            <h5>Company</h5>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Our Services</a></p>
            <p><a href="#">Privacy Policy</a></p>
          </div>
          <div className="col-md-3 footer-section">
            <h5>Online Shop</h5>
            <p><a href="#">Watch</a></p>
            <p><a href="#">Bags</a></p>
            <p><a href="#">Shoes</a></p>
            <p><a href="#">Dress</a></p>
            <p><a href="#">Skincare</a></p>
          </div>
          <div className="col-md-3 footer-section">
            <h5>Get Help</h5>
            <p><a href="#">FAQ</a></p>
            <p><a href="#">Shopping</a></p>
            <p><a href="#">Returns</a></p>
            <p><a href="#">Order Status</a></p>
            <p><a href="#">Payment Options</a></p>
          </div>
          <div className="col-md-3 footer-section">
            <h5>Follow Us</h5>
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
