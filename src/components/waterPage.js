import React from 'react';
import './page.css';
import waterImage from './tree-images/water.png';

const WaterPage = () => {
  const handleGetWater = () => {
    // Handle the logic for getting water here
    console.log('Water obtained!');
  };

  return (
    <div className="water-page">
      <div className="water-container">
        <div className="water-card">
          <img src={waterImage} className="water-image" alt="Water" />
          <button className="get-water-button" onClick={handleGetWater}>
            Get Water
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterPage;
