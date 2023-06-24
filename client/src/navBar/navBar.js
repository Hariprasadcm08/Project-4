import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="top">
      <ul>
        <li><img src="icon.png" alt="img" /></li>
        <li id="title"><i>TinyLinker</i></li>
        <li id="about"><Link to="/about">About-us</Link>
          </li>
      </ul>
    </nav>
  );
};

export default NavBar;
