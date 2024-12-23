import React from "react";
import "./Footer.css"; // Create and link a CSS file for styles
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"; // FontAwesome Icons

function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        {/* Company Section */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Insights</a></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Hire Talent</a></li>
            <li><a href="#">Develop Talent</a></li>
            <li><a href="#">Gamification Tools</a></li>
            <li><a href="#">Digital Skills</a></li>
            <li><a href="#">Commercial Skills</a></li>
            <li><a href="#">Leadership</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        {/* Social Media Links */}
        <div className="social-media">
          <a href="#"><FaTwitter className="social-icon" /></a>
          <a href="#"><FaLinkedin className="social-icon" /></a>
          <a href="#"><FaFacebook className="social-icon" /></a>
        </div>

        {/* Legal Links */}
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
