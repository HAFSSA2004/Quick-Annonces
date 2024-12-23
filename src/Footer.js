import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
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
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/insights">Insights</Link></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/hire-talent">Hire Talent</Link></li>
            <li><Link to="/develop-talent">Develop Talent</Link></li>
            <li><Link to="/gamification-tools">Gamification Tools</Link></li>
            <li><Link to="/digital-skills">Digital Skills</Link></li>
            <li><Link to="/commercial-skills">Commercial Skills</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        {/* Social Media Links */}
        <div className="social-media">
          <a href="javascript:void(0)" className="social-icon">
            <FaTwitter />
          </a>
          <a href="javascript:void(0)" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="javascript:void(0)" className="social-icon">
            <FaFacebook />
          </a>
        </div>

        {/* Legal Links */}
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/code-of-conduct">Code of Conduct</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
