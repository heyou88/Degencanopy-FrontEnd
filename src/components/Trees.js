// import React from 'react';
import './page.css';
import treeData from './treedata1';

const TreesPage = () => {
  return (
    <div className="My-trees-page">
      <h1 className="My-tree-headline">GET A TREE</h1>
      <div className="tree-container">
        <div className="tree-card">
          {treeData.blueTree.map((tree) => (
            <div key={tree.id}>
              {tree.id === 1 && (
                <>
                  <img src={tree.image} className="tree-image active" alt="Blue Tree" />
                  <button className="get-tree-button">Got It</button>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="tree-card">
          {treeData.greenTree.map((tree) => (
            <div key={tree.id}>
              {tree.id === 1 && (
                <>
                  <img src={tree.image} className="tree-image active" alt="Green Tree" />
                  <button className="get-tree-button">Got It</button>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="tree-card">
          {treeData.redTree.map((tree) => (
            <div key={tree.id}>
              {tree.id === 1 && (
                <>
                  <img src={tree.image} className="tree-image active" alt="Red Tree" />
                  <button className="get-tree-button">Got It</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreesPage;
