import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdsContext } from "./AdsContext"; // Import the context
import { useAuth } from "./AuthContext"; // Import authentication hook

function AddAds() {
  const { addAd } = useContext(AdsContext); // Get addAd from context
  const { isAuthenticated } = useAuth(); // Check if user is logged in
  const navigate = useNavigate(); // Navigation hook

  const [productN, setProductN] = useState("");
  const [category, setCategory] = useState("");
  const [aboutP, setAboutP] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);

  
    
  const handleNext = (e) => {
    e.preventDefault(); // Prevent default link behavior
  
    if (!isAuthenticated) {
      alert("You must be logged in to add an ad.");
      setTimeout(() => navigate("/login"), 100);
      return;
    }

    if (!productN || !category || !aboutP || !price || !location) {
      setError(true);
    } else {
      setError(false);
      addAd({ productN, price });
      navigate("/picture"); // Navigate manually after validation
    }
  };
  

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add ADS</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="tab text-center px-4 py-2 me-2 bg-white border rounded shadow"
          style={{
            width: "250px",
            height: "60px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
          }}
        >
          1. Product Info
        </div>
        <div
          className="tab text-center px-4 py-2 me-2 border rounded"
          style={{
            width: "250px",
            height: "60px",
            color: "white",
            backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2. Product Pictures
        </div>
        <div
          className="tab text-center px-4 py-2 border rounded"
          style={{
            width: "250px",
            height: "60px",
            color: "white",
            backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3. Seller Info
        </div>
      </div>

      <form
        className="container pt-4"
        style={{
          width: "69%",
          marginTop: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="form-group">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
            value={productN}
            onChange={(e) => setProductN(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Product Category</label>
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            <option value="clothes">Clothes</option>
            <option value="books">Books</option>
            <option value="el">Electronique</option>
            <option value="children">Children</option>
            <option value="sport">Sports</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">About Product</label>
          <textarea
            className="form-control"
            placeholder="Product description ..."
            value={aboutP}
            onChange={(e) => setAboutP(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter the Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Location</label>
          <select
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Choose Region</option>
            <option value="tanger">Tanger</option>
            <option value="rabat">Rabat</option>
            <option value="casablanca">Casablanca</option>
            <option value="agadir">Agadir</option>
          </select>
        </div>
        {error && (
          <div className="text-danger text-center my-3">
            Please fill out all fields before proceeding.
          </div>
        )}
        <div className="text-center">
  <button
    onClick={handleNext}
    className="btn btn-warning"
    style={{
      width: "100px",
      color: "white",
      marginBottom: "10px",
      textDecoration: "none",
    }}
  >
    Next
  </button>
</div>

      </form>
    </div>
  );
}

export default AddAds;
