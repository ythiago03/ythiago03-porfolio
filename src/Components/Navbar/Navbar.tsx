import React from 'react';

import icon from '../../assets/T-icon.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a className="highlighted-white" href="/">Home</a></li>
        <li><a className="highlighted-white" href="/">About</a></li>
        <li><a className="highlighted-white" href="/">Projects</a></li>
        <li><a className="highlighted-white" href="/">Contact</a></li>
      </ul>
      <div className="icon">
        <img src={icon} alt="Logo em forma de T" />
      </div>
    </nav>
  );
};

export default Navbar;
