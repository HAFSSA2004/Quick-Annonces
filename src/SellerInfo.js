import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SellerInfo() {
  const [sellerName, setSellerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [allowComments, setAllowComments] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("You must accept the Terms & Conditions to proceed.");
      return;
    }
    // Handle form submission logic here
    console.log({ sellerName, phoneNumber, email, city, allowComments });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex ms-2 justify-content-center align-items-center">
        <div
          className="tab text-center px-4 py-2 me-2 border rounded shadow"
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
          className="tab text-center px-4 py-2 me-2 bg-white border rounded shadow"
          style={{
            width: "250px",
            height: "60px",
            fontWeight: "bold",
            color: 'black',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3. Seller Info
        </div>
      </div>

      <form
        className="container p-4"
        style={{
          width: "69%",
          marginTop: "20px",
  
          border: "2px solid #ddd",  // Added border
          borderRadius: "10px",       // Rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Enhanced shadow
        }}
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-3">
          <label className="form-label">Seller Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            required
            style={{
              border: "1px solid #ddd",  // Add border to inputs
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // Add shadow to inputs
            }}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            placeholder="Enter your phone number"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={{
              border: "1px solid #ddd",  // Add border to inputs
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // Add shadow to inputs
            }}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              border: "1px solid #ddd",  // Add border to inputs
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // Add shadow to inputs
            }}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            style={{
              border: "1px solid #ddd",  // Add border to inputs
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", // Add shadow to inputs
            }}
          />
        </div>
        <div className="form-group mb-3 ms-3">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={allowComments}
            onChange={(e) => setAllowComments(e.target.checked)}
          />
          <label>Allow users to write comments to the products</label>
        </div>
        <div className="form-group mb-3 ms-3">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label>Terms & Conditions</label>
        </div>
        <div className="text-center">
          <Link
            to="/Myadds"
            className="btn btn-warning"
            style={{
              width: "150px",
              color: "white",
              marginBottom: "10px",
              textDecoration: "none",
            }}
          >
            Next
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SellerInfo;
