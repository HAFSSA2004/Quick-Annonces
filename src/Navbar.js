import { Link } from 'react-router-dom';
import React from 'react';
import Toggle from './Mode/Toggle';

function HeaderN() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img 
            src="logo2.png" 
            alt="Logo" 
            className="navbar-logo"
            width="100"
            height="100"
          />
        </Link>

        {/* Bouton de menu responsive */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenu de la navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Barre de recherche */}
          <div className="mx-auto d-none d-md-flex">
            <form className="d-flex">
              <input type="text" className="form-control me-2" placeholder="Search..." />
              <button className="btn btn-warning">🔍</button>
            </form>
          </div>

          {/* Liens et boutons - centrés sur mobile */}
          <div className="ms-auto d-flex align-items-center flex-column flex-lg-row justify-content-center text-center mt-3 mt-lg-0">
            <div>
            <Link to="/login" className="btn btn-outline-warning mb-2 mb-lg-0 me-lg-2">Login</Link> &nbsp;

            <Link to="/addAds" className="btn btn-warning text-white mb-2 mb-lg-0 me-lg-2">Add Ads</Link>
            </div>
            <Toggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderN;
