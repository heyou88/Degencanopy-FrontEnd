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
      <h1 className='My-tree-headline'>MY TREE</h1>
          <div>
            <button className='water-button'>Water Tree</button>
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
