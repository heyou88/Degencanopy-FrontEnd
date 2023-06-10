// import React from 'react';
// import './page.css';
// import TreesPage from './Trees';


// const Page = ({ currentPage }) => {

//   const getPageContent = () => {
//     switch (currentPage) {
//       case 'GET A TREE':
//         return <TreesPage />;
//       case 'MY TREES':
//         return <h2>MyTREE</h2>;
//       case 'GET WATER':
//         return <h2>water the tree</h2>;
//       case 'LOTTERY':
//         return <h2>try my luck</h2>;
//       default:
//         return null;
//     }
//   };
//   return (
//     <div className="page">
//       {getPageContent()}
//     </div>
//   );
// };

// export default Page;
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
        return <TreesPage handleGetTree={handleGetTree} />;
      case 'MY TREES':
        return (
          <div>
            <h2>My Trees</h2>
            {myTrees.map((tree, index) => (
              <div key={index} className="tree-card">
                <img src={tree.image} className="tree-image" alt={tree.name} />
                <h3>{tree.name}</h3>
                <p>{tree.description}</p>
              </div>
            ))}
          </div>
        );
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
    </div>
  );
};

export default Page;
