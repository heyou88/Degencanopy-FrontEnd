import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import './app.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('MY TREES');

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app" >
      <Sidebar setPage={setPage}/>
      <Page currentPage={currentPage} />
    </div>
  );
};

export default App;
