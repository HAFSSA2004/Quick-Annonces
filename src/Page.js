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
    <section  >
      

      {/* Barre de recherche */}
      

      
    </section>
  );
};

export default Page;
