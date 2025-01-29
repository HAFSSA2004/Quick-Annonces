import './navbarStyle.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Toggle from './Mode/Toggle';

function HeaderN() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Logo */}  
        <Link to="/" className="navbar-brand">
          <img 
            src="logo2.png" 
            alt="Logo" 
            className="navbar-logo"
          />
        </Link>
        
        {/* Barre de Recherche (100% centrée) */}
        <div className="search-container d-flex justify-content-center flex-grow-1">
          <form className="search-bar d-flex">
            <input type="text" className="form-control" placeholder="Search..." />
            <button className="btn btn-warning">🔍</button>
          </form>
        </div>

        {/* Boutons à droite */}
        <div className="d-flex align-items-center">
          <Link to="/login" className="btn btn-warning text-white me-2  sign me-2">Login</Link>
          <Link to="/addAds" className="btn btn-warning text-white me-2">Add Ads</Link>
          <Toggle />
        </div>

      </div>
    </nav>
  );
}

export default HeaderN;
