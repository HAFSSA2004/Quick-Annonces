import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Picture() {
  const [images, setImages] = useState([null, null, null, null]);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Add ADS</h1>
      <div className="d-flex justify-content-center align-items-center">
        {/* Tabs */}
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
          className="tab text-center px-4 py-2 me-2 border rounded shadow"
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

      {/* Four Upload Boxes */}
      <div className="d-flex justify-content-center gap-5 mt-4">
        {[0, 1].map((index) => (
          <div
            key={index}
            style={{
              width: "180px",
              height: "180px",
              border: "3px dashed gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
              backgroundImage: images[index] ? `url(${images[index]})` : 'none',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!images[index] && (
              <label htmlFor={`upload-${index}`} style={{ cursor: "pointer" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "gray",
                  }}
                >
                  <i
                    className="bi bi-upload"
                    style={{ fontSize: "48px", marginBottom: "8px" }} // Increased icon size
                  ></i>
                  <span style={{ fontSize: "16px" }}>Upload Picture</span>
                </div>
                <input
                  type="file"
                  id={`upload-${index}`}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageUpload(index, e)}
                />
              </label>
            )}
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center gap-5 mt-4">
        {[2, 3].map((index) => (
          <div
            key={index}
            style={{
              width: "180px",
              height: "180px",
              border: "3px dashed gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
              backgroundImage: images[index] ? `url(${images[index]})` : 'none',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!images[index] && (
              <label htmlFor={`upload-${index}`} style={{ cursor: "pointer" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "gray",
                  }}
                >
                  <i
                    className="bi bi-upload"
                    style={{ fontSize: "48px", marginBottom: "8px" }} // Increased icon size
                  ></i>
                  <span style={{ fontSize: "16px" }}>Upload Picture</span>
                </div>
                <input
                  type="file"
                  id={`upload-${index}`}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageUpload(index, e)}
                />
              </label>
            )}
          </div>
        ))}
      </div>

      <form className="container" style={{ width: "71%", marginTop: "20px" }}>
        <div className="text-center">
          <Link
            to="/seller-info"
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

export default Picture;
