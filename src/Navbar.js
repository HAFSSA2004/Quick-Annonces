import './navbarStyle.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Toggle from './Mode/Toggle';

function HeaderN() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src="quick.png" 
            alt="Logo" 
            className="navbar-logo"
          />
          <span className="navbar-title ms-2">Quick Annonce</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/signup" className="btn sign">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/addAds" className="btn btn-warning text-white me-md-3">Add Ads</Link>
            </li>
            <li className="nav-item">
              <Toggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderN;
