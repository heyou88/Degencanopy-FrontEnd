
import React, { useState } from 'react';
import './page.css';
import treeData from './treedata1';

const MyTreesPage = () => {
  const [treeStates, setTreeStates] = useState({
    blueTree: { imageId: 1 },
    greenTree: { imageId: 1 },
    redTree: { imageId: 1 },
  });

  const handleWaterClick = (treeName) => {
    setTreeStates((prevTreeStates) => {
      const prevImageId = prevTreeStates[treeName].imageId;
      const newImageId = prevImageId < 3 ? prevImageId + 1 : prevImageId;

      return {
        ...prevTreeStates,
        [treeName]: {
          imageId: newImageId,
        },
      };
    });
  };

  const renderTree = (tree, treeName) => {
    const { imageId } = treeStates[treeName];

    return tree.map((treeItem) => {
      if (treeItem.id === imageId) {
        return (
          <div className="tree-card" key={treeItem.id}>
            <img src={treeItem.image} className="tree-image" alt="Tree" />
            <button className="water-button" onClick={() => handleWaterClick(treeName)}>
              Water It
            </button>
          </div>
        );
      }
      return null;
    });
  };

  const blueTree = treeData.blueTree;
  const greenTree = treeData.greenTree;
  const redTree = treeData.redTree;

  return (
    <div className="My-trees-page">
      <h1 className="My-tree-headline">MY TREES</h1>
      <div className="tree-container">
        {renderTree(blueTree, 'blueTree')}
        {renderTree(greenTree, 'greenTree')}
        {renderTree(redTree, 'redTree')}
      </div>
    </div>
  );
};

export default MyTreesPage;
