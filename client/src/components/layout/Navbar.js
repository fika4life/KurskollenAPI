import React from 'react';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <a className="navbar-brand" href="/">
                KURSKOLLEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sök
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search-results">
                Results
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/write-review">
                Skriv omdöme
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Logga in
              </a>
            </li>
            <li className="nav-item">
              <a href="/register">
                <button className="button nav-button" type="submit">
                  Registrera
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
