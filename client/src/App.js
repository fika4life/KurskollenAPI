import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

const App = () => {
  return (
    <Fragment>
      <Navbar></Navbar>

      <main className="main-container">
        <Landing></Landing>
      </main>
    </Fragment>
  );
};

export default App;
