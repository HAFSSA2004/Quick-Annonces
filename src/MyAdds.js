import React, { useContext, useState } from 'react';
import { AdsContext } from './AdsContext';

function MyAdds() {
  const { ads, setAds } = useContext(AdsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);

  // Filter out duplicates based on a unique property like productN
  const uniqueAds = Array.from(new Map(ads.map((ad) => [ad.productN, ad])).values());

  const handleUpdate = (ad) => {
    setCurrentAd({ ...ad }); // Ensure we copy the ad object
    setIsEditing(true);
  };

  const handleDelete = (ad) => {
    if (window.confirm(`Are you sure you want to delete the ad for ${ad.productN}?`)) {
      setAds(ads.filter((item) => item.productN !== ad.productN));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    // Ensure currentAd is not null and has an id
    if (currentAd && currentAd.id) {
      const updatedAds = ads.map((ad) =>
        ad.id === currentAd.id ? { ...ad, ...currentAd } : ad // Update the correct ad
      );
  
      setAds(updatedAds); // Update the ads state with the modified ads
      setIsEditing(false); // Close the modal after saving
      setCurrentAd(null); // Reset the currentAd state
    } else {
      console.error("Current ad is not valid for saving.");
    }
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">My Ads</h1>
      <div className="ads-container row row-cols-1 row-cols-md-2 gap-4 justify-content-center">
        {uniqueAds.map((ad) => (
          <div
            key={ad.productN}
            className="col d-flex align-items-center justify-content-between border p-3 rounded shadow-sm bg-white"
          >
            <div className="d-flex align-items-center gap-3">
              {ad.image ? (
                <img
                  src={URL.createObjectURL(ad.image)}
                  alt={ad.productN || 'Product Image'}
                  className="img-fluid rounded"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
              ) : (
                <div
                  className="bg-light rounded"
                  style={{ width: '120px', height: '120px' }}
                ></div>
              )}
              <div className="text-left">
                <h5 className="mb-1 text-dark">{ad.productN || 'No Product Name'}</h5>
                <p className="text-success fw-bold mb-1">Price: ${ad.price || 'N/A'}</p>
                {ad.description && <p className="mb-0">{ad.description}</p>}
              </div>
            </div>
            <div className="d-flex gap-2">
              <button
                onClick={() => handleUpdate(ad)}
                className="btn btn-outline-primary p-2"
                style={{ borderRadius: '8px' }}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                onClick={() => handleDelete(ad)}
                className="btn btn-outline-danger p-2"
                style={{ borderRadius: '8px' }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div
          className="modal"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <form
            onSubmit={handleSave}
            className="bg-white p-4 rounded shadow-sm"
            style={{ width: '80%', maxWidth: '400px' }}
          >
            <h2 className="text-center mb-4">Edit Ad</h2>
            <div className="mb-3">
              <label className="form-label">Product Name:</label>
              <input
                type="text"
                value={currentAd?.productN || ''}
                onChange={(e) =>
                  setCurrentAd({ ...currentAd, productN: e.target.value })
                }
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price:</label>
              <input
                type="number"
                value={currentAd?.price || ''}
                onChange={(e) =>
                  setCurrentAd({ ...currentAd, price: e.target.value })
                }
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description:</label>
              <textarea
                value={currentAd?.description || ''}
                onChange={(e) =>
                  setCurrentAd({ ...currentAd, description: e.target.value })
                }
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-danger"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default MyAdds;