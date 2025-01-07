import React, { createContext, useState } from 'react';

export const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
    const [ads, setAds] = useState([]);
  
    const addAd = (newAd) => {
      setAds((prevAds) => [...prevAds, newAd]); // Add the new ad to the list
    };
  
    return (
      <AdsContext.Provider value={{ ads, addAd, setAds }}>
        {children}
      </AdsContext.Provider>
    );
};
