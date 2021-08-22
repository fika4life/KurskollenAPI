import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Courses from './components/courses/Courses';

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <main className="main-container">
        <Route exact path="/">
          <Landing></Landing>
        </Route>

        <Route exact path="/courses">
          <Courses />
        </Route>
      </main>
    </>
  );
};

export default App;
