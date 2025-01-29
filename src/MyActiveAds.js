import React from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ads = [
  { id: 1, name: "Black sneakers", color: "Black", size: "43", price: "20$", status: "Active", image: "https://via.placeholder.com/50" },
  { id: 2, name: "Watch", color: "Black", price: "20$", status: "Active", image: "https://via.placeholder.com/50" },
  { id: 3, name: "Glasses", color: "Black", price: "20$", status: "Active", image: "https://via.placeholder.com/50" },
  { id: 4, name: "Bag", color: "Brown", price: "20$", status: "Active", image: "https://via.placeholder.com/50" },
];

const MyActiveAds = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        
        {/* Sidebar */}
        <div className="col-12 col-md-3 p-3">
          <div className="d-flex flex-column align-items-start">
            <button className="btn btn-warning w-100 mb-2">Manage my Ads</button>
            <button className="btn btn-light w-100 mb-2">Manage Categories</button>
            <button className="btn btn-light w-100 mb-2">Manage Cities</button>
            <button className="btn btn-light w-100 mb-2">Validated Ads</button>
            <button className="btn btn-light w-100">Delete Users</button>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="col-12 col-md-9 p-4">
          <h2 className="text-warning text-center">My Active Ads</h2>

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
                    <td className="text-success">{ad.status}</td>
                    <td>
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

export default MyActiveAds;
