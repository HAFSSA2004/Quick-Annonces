import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

const ads = [
  { id: 1, name: "Black sneakers", color: "Black", size: "43", price: "20$", status: "Validated", image: "https://via.placeholder.com/50" },
  { id: 2, name: "Blue Jacket", color: "Blue", size: "XL", price: "20$", status: "Unapproved", image: "https://via.placeholder.com/50" },
  { id: 3, name: "Watch", color: "Black", price: "20$", status: "Unapproved", image: "https://via.placeholder.com/50" },
  { id: 4, name: "Glasses", color: "Black", price: "20$", status: "Validated", image: "https://via.placeholder.com/50" },
  { id: 5, name: "Bag", color: "Brown", price: "20$", status: "Validated", image: "https://via.placeholder.com/50" },
];

const ManageValidation = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        
        {/* Sidebar */}
        <div className="col-12 col-md-3 p-3">
          <div className="d-flex flex-column align-items-start">
            <button className="btn btn-secondary w-100 mb-2">Manage my Ads</button>
            <button className="btn btn-secondary w-100 mb-2">Manage Categories</button>
            <button className="btn btn-secondary w-100 mb-2">Manage Cities</button>
            <button className="btn btn-warning w-100 mb-2">Validated Ads</button>
            <button className="btn btn-light w-100">Delete Users</button>
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
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ads.map((ad) => (
                  <tr key={ad.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={ad.image} alt="Product" className="rounded me-2" />
                        <div>
                          <strong>{ad.name}</strong>
                          <br />
                          <small>Color: {ad.color} {ad.size && <>, Size: {ad.size}</>}</small>
                        </div>
                      </div>
                    </td>
                    <td>{ad.price}</td>
                    <td className={ad.status === "Validated" ? "text-success" : "text-danger"}>
                      {ad.status}
                    </td>
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
