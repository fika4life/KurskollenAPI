import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/">
                KURSKOLLEN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Sök
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/search-results">
                Results
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/write-review">
                Skriv omdöme
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/login">
                Logga in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/register">
                <button className="button nav-button" type="submit">
                  Registrera
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
