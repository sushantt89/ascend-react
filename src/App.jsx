import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './mainContainers/Header/Header';
import Aside from './mainContainers/Aside/Aside';
import Dashboard from './mainContainers/Dashboard/Dashboard';

const App = () => {

  return (
    <>
    
      <Router>
        <Header />
        <Aside />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
