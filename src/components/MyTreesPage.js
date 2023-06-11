import React, { useEffect, useState } from 'react';
import './page.css';
import treeImages from './treedata';

const MyTreesPage = () => {
  const [nftData, setNftData] = useState(null);

  useEffect(() => {
    // Fetch the JSON object of the NFT from the MetaMask account
    const fetchNftData = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            const account = accounts[0];
            const nftDataResponse = await fetch(`https://api.example.com/nfts/${account}`);
            const nftDataJson = await nftDataResponse.json();
            setNftData(nftDataJson);
          }
        } catch (error) {
          console.log('Failed to fetch NFT data:', error);
        }
      }
    };

    fetchNftData();
  }, []);

  return (
    <div className="My-trees-page">
      <h1 className='My-tree-headline'>MY TREES</h1>
      <div className="tree-container">
        {treeImages.slice(0, 3).map((tree, index) => (
          <div className="tree-card" key={index}>
            <img src={tree.image} className="tree-image" alt="Tree" />
            <button className="water-button">Water It</button>
          </div>
        ))}
      </div>
      {nftData && (
        <div>
          <h2>NFT Details:</h2>

          <pre>{JSON.stringify(nftData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyTreesPage;
