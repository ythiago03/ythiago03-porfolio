import React from 'react';
import { Link } from 'react-scroll';
import icon from '../../assets/T-icon.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link className="highlighted-white" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        <li><Link className="highlighted-white" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
        <li><Link className="highlighted-white" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
      </ul>
      <div className="icon">
        <img src={icon} alt="Logo em forma de T" />
      </div>
    </nav>
  );
};

export default Navbar;
