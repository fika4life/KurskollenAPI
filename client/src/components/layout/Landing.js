import React from 'react';

const Landing = () => {
  return (
    <>
      <div id="home">
        <h1 id="hero-text">
          Läs och lämna <span className="highlighter">omdömen</span> om
          universitetskurser
        </h1>
        <div id="search-container">
          <form id="search-form">
            <div className="form-control">
              <label htmlFor="search">Sök på en kurs eller program</label>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Eg. Dietist"
                autoComplete="off"
              />
            </div>
            <button type="submit" className="primary">
              <i className="fa fa-search"></i>Sök
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Landing;
