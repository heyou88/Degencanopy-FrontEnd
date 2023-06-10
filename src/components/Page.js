
import React, { useState } from 'react';
import './page.css';
import TreesPage from './Trees';
import MyTreesPage from './MyTreesPage';

const Page = ({ currentPage }) => {
  const [myTrees, setMyTrees] = useState([]);

  const handleGetTree = (tree) => {
    setMyTrees((prevTrees) => [...prevTrees, tree]);

  };

  const getPageContent = () => {
    switch (currentPage) {
      case 'GET A TREE':
        return <TreesPage  handleGetTree={handleGetTree} />;
      case 'MY TREES':
        return <MyTreesPage/>
      case 'GET WATER':
        return <h2>Water the tree</h2>;
      case 'LOTTERY':
        return <h2>Try your luck</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="page">
      {getPageContent()}
      <button className="MetaMask">MetaMask</button>
    </div>
  );
};

export default Page;
