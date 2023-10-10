import React from 'react';

import githubIcon from '../../assets/github-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div></div>
      <span>Follow Me</span>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/ythiago03/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="Link com a logo do Linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ythiago03" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Link com a logo do Github" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ythiago03/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Link com a logo do Instagram" />
          </a>
        </li>
      </ul>
    </nav>
  );
};


export default Sidebar;
