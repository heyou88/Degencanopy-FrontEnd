import React from 'react';
import './page.css';
import treeImage1 from './tree-images/groot blue 1 other.png';

// Import all tree images from the "tree-images" folder

const TreesPage = ({ trees }) => {
  return (
    <div className="trees-page">
      <div className="tree-card">
        <img src={treeImage1} className="tree-image" alt="Tree 1" />
        <button className="get-tree-button">Get IT!</button>
      </div>
      {/* Add more tree cards as needed */}
    </div>
  );
};

export default TreesPage;
// import React from 'react';
// import './page.css';

// const TreesPage = ({ trees, handleGetTree }) => {
//   return (
//     <div className="trees-page">
//       {trees.map((tree, index) => (
//         <div key={index} className="tree-card">
//           <img src={tree.image} className="tree-image" alt={tree.name} />
//           <button className="get-tree-button" onClick={() => handleGetTree(tree)}>
//             Get It!
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TreesPage;
