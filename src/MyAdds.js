import React, { useContext, useState } from 'react';
import { AdsContext } from './AdsContext';

function MyAdds() {
  const { ads, setAds } = useContext(AdsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);

  // Filter out duplicates based on a unique property like productN
  const uniqueAds = Array.from(new Map(ads.map((ad) => [ad.productN, ad])).values());

  const handleUpdate = (ad) => {
    setCurrentAd(ad);
    setIsEditing(true);
  };

  const handleDelete = (ad) => {
    if (window.confirm(`Are you sure you want to delete the ad for ${ad.productN}?`)) {
      setAds(ads.filter((item) => item.productN !== ad.productN));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Ensure that the currentAd has the correct productN and other updated values
    const updatedAds = ads.map((ad) =>
      ad.id === currentAd.id // Compare using the unique ID
        ? { ...ad, ...currentAd } // Update the entire ad (all properties) with currentAd
        : ad // If the ad doesn't match, return it unchanged
    );
    
    //const updatedAds = ads.map((ad) =>
      //ad.productN === currentAd.p ? { ...ad, ...currentAd } : ad
    //);
    // Update the ads state with the new array
    setAds(updatedAds);
    setIsEditing(false); // Close the editing modal
    setCurrentAd(null); // Reset the current ad state
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '5vh', backgroundColor: '#f9f9f9', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>My Ads</h1>
      <div className="ads-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
        {uniqueAds.map((ad) => (
          <div key={ad.productN} style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {ad.image ? (
                <img src={URL.createObjectURL(ad.image)} alt={ad.productN || 'Product Image'} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
              ) : (
                <div style={{ width: '100px', height: '100px', backgroundColor: '#ddd', borderRadius: '8px' }}></div>
              )}
              <div style={{ textAlign: 'left' }}>
                <strong>Product Name</strong>
                <h5>{ad.productN || 'No Product Name'}</h5>
                <p style={{ color: 'green', fontWeight: 'bold' }}>Price: ${ad.price || 'N/A'}</p>
                {ad.description && <p>{ad.description}</p>}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => handleUpdate(ad)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#007bff' }}>
                <i className="fas fa-edit"></i>
              </button>
              <button onClick={() => handleDelete(ad)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px', color: '#dc3545' }}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="modal" style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form onSubmit={handleSave} style={{ background: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
            <h2>Edit Ad</h2>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Product Name:
                <input
                  type="text"
                  value={currentAd.productN}
                  onChange={(e) => setCurrentAd({ ...currentAd,productN: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                />
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Price:
                <input
                  type="number"
                  value={currentAd.price}
                  onChange={(e) => setCurrentAd({ ...currentAd, price: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                />
              </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Description:
                <textarea
                  value={currentAd.description}
                  onChange={(e) => setCurrentAd({ ...currentAd, description: e.target.value })}
                  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                />
              </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={() => setIsEditing(false)} style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>
                Cancel
              </button>
              <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default MyAdds;
