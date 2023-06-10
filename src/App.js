import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import './app.css';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('MY TREES');

//   const setPage = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="app">
//       <Sidebar setPage={setPage} />
//       <Page currentPage={currentPage} />
//     </div>
//   );
// };

// export default App;
const App = () => {
  const [currentPage, setCurrentPage] = useState('MY TREES');
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleMouseEnter = () => {
    setSidebarVisible(true);
  };

  const handleMouseLeave = (event) => {
    if (event.pageX < 50) {
      setSidebarVisible(false);
    }
  };

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Sidebar setPage={setPage} hidden={!sidebarVisible} />
      <Page currentPage={currentPage} />
    </div>
  );
};

export default App;
