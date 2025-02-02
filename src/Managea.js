import React from "react";
import { useNavigate } from "react-router-dom";
import "./Managea.css"; // Import du fichier CSS

const Managea = () => {
  const navigate = useNavigate(); // Hook pour naviguer entre les pages

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        
        {/* Sidebar des boutons */}
        <div className="sidebar">
        <button className="sidebar-button" onClick={() => navigate("/ManageValidation")}>Validated Adds</button>
        </div>

        {/* Contenu principal */}
        <div className="content">
          <h1>Welcome back, admin!</h1>
          <p>How can I assist you today?</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3208/3208676.png"
            alt="Handshake"
            className="handshake-image"
          />
        </div>

      </div>
    </div>
  );
};

export default Managea;
