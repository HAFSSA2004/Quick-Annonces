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
            <li><button className="footer-link">About Us</button></li>
            <li><button className="footer-link">Solutions</button></li>
            <li><button className="footer-link">Insights</button></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><button className="footer-link">Hire Talent</button></li>
            <li><button className="footer-link">Develop Talent</button></li>
            <li><button className="footer-link">Gamification Tools</button></li>
            <li><button className="footer-link">Digital Skills</button></li>
            <li><button className="footer-link">Commercial Skills</button></li>
            <li><button className="footer-link">Leadership</button></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        {/* Social Media Links */}
        <div className="social-media">
          <button className="social-icon" aria-label="Twitter"><FaTwitter /></button>
          <button className="social-icon" aria-label="LinkedIn"><FaLinkedin /></button>
          <button className="social-icon" aria-label="Facebook"><FaFacebook /></button>
        </div>

        {/* Legal Links */}
        <div className="legal-links">
          <button className="footer-link">Privacy Policy</button>
          <button className="footer-link">Terms & Conditions</button>
          <button className="footer-link">Code of Conduct</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
