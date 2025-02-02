import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { INITIAL_STATE } from "./Reducers/Filter"; // Assurez-vous que cet import est correct et que le chemin vers le fichier est valide

const ManageValidation = () => {
  // Stocker les profils dans l'état local
  const [profiles, setProfiles] = useState(INITIAL_STATE.profils);

  // Fonction pour supprimer un profil
  const handleDelete = (indexToDelete) => {
    const updatedProfiles = profiles.filter((_, index) => index !== indexToDelete);
    setProfiles(updatedProfiles);
  };

  // Fonction pour modifier un profil
  const handleEdit = (index) => {
    const newTitle = prompt("Enter new product title:", profiles[index].title);
    const newPrice = prompt("Enter new product price:", profiles[index].price);

    if (newTitle !== null && newPrice !== null) {
      const updatedProfiles = [...profiles];
      updatedProfiles[index] = {
        ...updatedProfiles[index],
        title: newTitle,
        price: newPrice,
      };
      setProfiles(updatedProfiles);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        {/* Sidebar */}
        <div className="col-12 col-md-3 p-3">
          <div className="d-flex flex-column align-items-start">
            <button className="sidebar-button">Validated Adds</button>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="col-12 col-md-9 p-4">
          <h2 className="text-warning text-center">Manage Validation</h2>

          {/* Table responsive */}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={profile.image} alt="Product" className="rounded me-2" width="50" height="50" />
                        <div>
                          <strong>{profile.title}</strong>
                          <br />
                          <small>Location: {profile.location}</small>
                        </div>
                      </div>
                    </td>
                    <td>{profile.price}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>
                        <FaEdit />
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
                {profiles.length === 0 && (
                  <tr>
                    <td colSpan="3" className="text-center text-muted">
                      No products available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageValidation;
