import React from "react";
function SignUp(){
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          alert("Les mots de passe ne correspondent pas !");
          return;
        }
        console.log("Formulaire soumis avec succès : ", formData);
        alert("Inscription réussie !");
      };
    
      return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="form-container p-4 shadow rounded bg-white" style={{ width: "100%", maxWidth: "400px" }}>
            <h2 className="text-center mb-4">Inscription</h2>
            <form onSubmit={handleSubmit}>
              {/* Champ Nom */}
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  placeholder="Entrez votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Champ Prénom */}
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="prenom"
                  name="prenom"
                  placeholder="Entrez votre prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Champ Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Entrez votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Champ Mot de Passe */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Mot de Passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Entrez votre mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Champ Confirmation du Mot de Passe */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirmer le Mot de Passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmez votre mot de passe"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Boutons */}
              <div className="mb-3 d-flex justify-content-between">
                <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
              </div>
            </form>
            <hr />
            <div className="d-grid gap-2">
              <button className="btn btn-google" style={{ backgroundColor: "#db4437", color: "white" }}>
                Continuer avec Google
              </button>
              <a href="/admin" className="btn btn-secondary">Se connecter comme Admin</a>
            </div>
          </div>
          </div>
      );

};
export default SignUp;