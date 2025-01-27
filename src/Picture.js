import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa"; // Import upload icon from react-icons
import { AdsContext } from './AdsContext'; // Import the context

function Picture() {
  const { ads, addAd } = useContext(AdsContext); // Get ads and addAd from context
  const [uploadedImages, setUploadedImages] = useState([null, null, null, null]);

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...uploadedImages];
      updatedImages[index] = file;
      setUploadedImages(updatedImages);
    }
  };

  const isAtLeastOneImageUploaded = uploadedImages.some((image) => image !== null);
  const handleNext = () => {
    const lastAd = ads[ads.length - 1]; // Get the last ad added
    const updatedAd = { ...lastAd, image: uploadedImages[0] }; // Assuming you want to use the first uploaded image
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
          className="tab text-center px-4 py-2 bg-white  text-dark me-2 border rounded shadow"
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

      {/* Four Boxes Section */}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {uploadedImages.map((image, index) => (
          <div
            key={index}
            className="box bg-white rounded position-relative"
            style={{
              width: "150px",
              height: "150px",
              border: "3px dashed black",
              margin: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
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
                htmlFor={`file-upload-${index}`}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FaUpload size={30} color="grey" />
                <span style={{ fontSize: "12px",color:'grey' }}>Upload</span>
              </label>
            )}
            <input
              id={`file-upload-${index}`}
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(index, e)}
              style={{ display: "none" }}
            />
          </div>
        ))}
      </div>

      <form className="container" style={{ width: "71%", marginTop: "20px" }}>
        <div className="text-center">
          <Link
            to="/seller-info"
            onClick={handleNext} // Call handleNext on click
            className={`btn btn-warning ${!isAtLeastOneImageUploaded ? "disabled" : ""}`}
            style={{
              width: "100px",
              color: "white",
              marginBottom: "10px",
              textDecoration: "none",
              pointerEvents: isAtLeastOneImageUploaded ? "auto" : "none",
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
