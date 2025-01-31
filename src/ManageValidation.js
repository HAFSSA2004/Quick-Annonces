import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { INITIAL_STATE } from "./Reducers/Filter";
import { useNavigate } from "react-router-dom";


const ManageValidation = () => {
  const navigate = useNavigate();
  const profiles = INITIAL_STATE.profils;

  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        {/* Sidebar */}
        <div className="col-12 col-md-3 p-3">
          <div className="d-flex flex-column align-items-start">
          <button className="sidebar-button" onClick={() => navigate("/MyActiveAds")}>Manage Adds</button>          
        <button className="sidebar-button" onClick={() => navigate("/ManageValidation")}>Validated Adds</button>
        <button className="sidebar-button" onClick={() => navigate("/ManageUsers")}>Delete Users</button>
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
                      <button className="btn btn-success btn-sm me-2">
                        <FaCheckCircle />
                      </button>
                      <button className="btn btn-danger btn-sm">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageValidation;