import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({onButtonClick, showRandomPlanet}) => {
  const buttonLabel = showRandomPlanet ? 'Hide Random Planet' : 'Show Random Planet'
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">Star DB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/login/">Login</Link>
        </li>
        <li>
          <Link to="/secret/">Secret Page</Link>
        </li>
        <button
            className='btn btn-primary btn-sm'
            onClick={onButtonClick}>
          { buttonLabel }
        </button>
      </ul>
    </div>
  );
};

export default Header;