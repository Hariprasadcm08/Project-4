import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src='icon.png' alt='logo' height='40px' width='40px'/>
      </div>
      <h2 className='nav-title'>TinyLinker</h2>
      <ul className='nav-menu'>
        <Link to="/about" className="nav-link">
          <button className="nav-button">About Us</button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
