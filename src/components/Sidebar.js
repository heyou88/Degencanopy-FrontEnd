import React from 'react';
import './sidebar.css';
const Sidebar = ({ setPage }) => {
  const pages = ['GET A TREE', 'MY TREES', 'GET WATER', 'LOTTERY']; // List of pages

  return (
    <div className="sidebar">
      {pages.map((page, index) => (
        <button key={index} onClick={() => setPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
