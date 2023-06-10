import React, { useState } from 'react';
import '../app.css';

  const Sidebar = ({ setPage }) => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const pages = ['GET A TREE', 'MY TREES', 'GET WATER', 'LOTTERY']; // List of pages

    const handleMouseEnter = () => {
      setSidebarVisible(true);
    };

    const handleMouseLeave = (event) => {
      const { clientX, clientY } = event;

      const appContainer = document.querySelector('.app');
      const { left, top, width, height } = appContainer.getBoundingClientRect();

      if (
        clientX < left ||
        clientX > left + width ||
        clientY < top ||
        clientY > top + height
      ) {
        setSidebarVisible(false);
      }
    };
  return (
    <div  className={`sidebar ${sidebarVisible ? 'open' : ''}`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {pages.map((page, index) => (
        <button key={index} onClick={() => setPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
