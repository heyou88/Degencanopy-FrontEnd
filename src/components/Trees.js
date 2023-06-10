import React from 'react';
import './page.css';
import treeImages from './treedata';

const TreesPage = ({ handleGetTree }) => {
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * treeImages.length);
    return treeImages[randomIndex].image;
  };

  const handleButtonClick = () => {
    const randomImage = getRandomImage();
    const tree = {
      image: randomImage,
      name: 'Random Tree',
      description: 'This is a random tree',
    };
    handleGetTree(tree);
  };

  return (
    <div className="trees-page">
      <div className="tree-card">
        <img src={getRandomImage()} className="tree-image" alt="Random Tree" />
        <button className="get-tree-button" onClick={handleButtonClick}>
          Get It!
        </button>
      </div>
    </div>
  );
};

export default TreesPage;
