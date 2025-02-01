import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa"; // Import upload icon from react-icons
import { AdsContext } from './AdsContext'; // Import the context

function Picture() {
  const { ads, addAd } = useContext(AdsContext); // Get ads and addAd from context
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleNext = () => {
    const lastAd = ads[ads.length - 1]; // Get the last ad added
    const updatedAd = { ...lastAd, image: uploadedImage }; // Update the ad with uploaded image
    addAd(updatedAd); // Update the ad in context
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add ADS</h1>
      <div className="d-flex justify-content-center align-items-center">
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
          1. Product Info
        </div>

        <div
          className="tab text-center px-4 py-2 bg-white text-dark me-2 border rounded shadow"
          style={{
            width: "250px",
            height: "60px",
            fontWeight: "bold",
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

      {/* Single Centered Upload Box */}
      <div className="d-flex justify-content-center mt-4">
        <div
          className="box bg-white rounded position-relative"
          style={{
            width: "280px",
            height: "250px",
            border: "4px dashed black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {uploadedImage ? (
            <img
              src={URL.createObjectURL(uploadedImage)}
              alt="Uploaded"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          ) : (
            <label
              htmlFor="file-upload"
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaUpload size={80} color="grey" />
              <span style={{ fontSize: "25px", color: "grey",marginTop:'10px' }}>Upload</span>
            </label>
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <form className="container" style={{ width: "71%", marginTop: "20px" }}>
        <div className="text-center">
          <Link
            to="/seller-info"
            onClick={handleNext}
            className={`btn btn-warning ${!uploadedImage ? "disabled" : ""}`}
            style={{
              width: "100px",
              color: "white",
              marginBottom: "10px",
              textDecoration: "none",
              pointerEvents: uploadedImage ? "auto" : "none",
            }}
          >
            Next
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Picture;
