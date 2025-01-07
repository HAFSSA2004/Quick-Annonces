import './navbarStyle.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Toggle from './Mode/Toggle';

function HeaderN() {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-white">
      <div className="navbar-brand d-flex align-items-center ms-4">
        <img src="quick.png" alt="" style={{ width: '50px', height: '50px', borderRadius: '100px' }} />
      </div>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/signup" className="btn sign">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/addAds" className="btn btn-warning text-white me-5">Add Ads</Link>
        </li>
      </ul>
<Toggle/>
    </div>
  );
}

export default HeaderN;
