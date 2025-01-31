import React from "react";
import "./Page.css"; // Ton fichier CSS personnalisé
import "bootstrap/dist/css/bootstrap.min.css"; // Assure-toi que Bootstrap est bien installé

const Page = () => {
  const heroStyle = {
    backgroundImage: `url('/metting.jpg')`, 
    backgroundSize: "cover",
    width: "100%",
    height: "350px",
    color: "white", 
    display: "flex",
    marginTop: "15px", 
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "flex-start",
    textAlign: "start",
    backgroundPosition: "center",
    position: "relative", // Ajout pour éviter des problèmes d'affichage
  };

  return (
    <section className="hero-section" style={heroStyle}>
      <h1 className="hero-title">Share Now</h1>
      <h2 className="hero-subtitle">Discover More</h2>

      {/* Barre de recherche */}
      <div className="container mt-5">
        <div className="input-group search-bar">
          <input type="text" className="form-control" placeholder="Search..." />
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i> {/* Icône de recherche Bootstrap */}
          </span>
        </div>
      </div>

      {/* Filtres */}
      <div className="filter-container" style={{ marginLeft: "500px", marginTop: "20px" }}>
        
        <select className="filter-dropdown">
          <option>Filter By City</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select className="filter-dropdown">
          <option>Filter By Category</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </section>
  );
};

export default Page;
