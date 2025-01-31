import React from "react";
import "./Footer.css"; // Assurez-vous que ce fichier existe et contient les styles nécessaires
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer class="text-center mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-3 footer-section">
                    <h5>Company</h5>
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Privacy Policy</p>
                </div>
                <div class="col-md-3 footer-section">
                    <h5>Online Shop</h5>
                    <p>Watch</p>
                    <p>Bags</p>
                    <p>Shoes</p>
                    <p>Dress</p>
                    <p>Skincare</p>
                </div>
                <div class="col-md-3 footer-section">
                    <h5>Get Help</h5>
                    <p>FAQ</p>
                    <p>Shopping</p>
                    <p>Returns</p>
                    <p>Order Status</p>
                    <p>Payment Options</p>
                </div>
                <div class="col-md-3 footer-section">
                    <h5>Follow Us</h5>
                    <div class="social-icons">
                       <a href=""> <i class="bi bi-twitter" ></i></a>
                      <a href=""><i class="bi bi-linkedin"></i>  </a>
                       <a href=""> <i class="bi bi-facebook"></i></a>
                       <a href=""><i class="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>
  );
}

export default Footer;
