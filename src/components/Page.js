
import React, { useState } from 'react';
import './page.css';
import TreesPage from './Trees';
import MyTreesPage from './MyTreesPage';
import WaterPage from './waterPage';

const Page = ({ currentPage }) => {
  // const [myTrees, setMyTrees] = useState([]);
  const [metamaskAddress, setMetamaskAddress] = useState('');
  const handleGetTree = (tree) => {
    // setMyTrees((prevTrees) => [...prevTrees, tree]);

  };

  const getPageContent = () => {
    switch (currentPage) {
      case 'GET A TREE':
        return <TreesPage  handleGetTree={handleGetTree} />;
      case 'MY TREES':
        return <MyTreesPage/>;
      case 'GET WATER':
        return <WaterPage/>;
      case 'LOTTERY':
        return <h2>Try your luck</h2>;
      default:
        return null;
    }
  };

  const truncateAddress = (address) => {
    const start = address.slice(0, 6);
    const end = address.slice(address.length - 4);
    return `${start}...${end}`;
  };

  const handleMetaMaskButtonClick = () => {
    if (window.ethereum) {
      window.ethereum.enable()
        .then((accounts) => {
          console.log('MetaMask is enabled');
          console.log('Connected account:', accounts[0]);
          setMetamaskAddress(accounts[0]);
        })
        .catch((error) => {
          console.log('Failed to enable MetaMask:', error);
        });
    } else {
      console.log('MetaMask is not installed');
    }
  };


  return (
    <div className="page">
      {getPageContent()}
      <button className="MetaMask" onClick={handleMetaMaskButtonClick}>
        {metamaskAddress ? truncateAddress(metamaskAddress) : 'Connect MetaMask'}
      </button>
    </div>
  );
};

export default Page;
