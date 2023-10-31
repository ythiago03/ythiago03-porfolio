/* UTILS */
import { motion } from 'framer-motion';

/* Style and Icons */
import './Sidebar.css';

import githubIcon from '../../assets/github-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Sidebar = () => {
  
  const {languageToggle} = useContext(AppContext);

  return (
    <motion.nav 
      variants={{
        hidden: { opacity: 0, y: -300 },
        visible: { opacity: 1, y: 32}
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 0.6, delay: 0.25}}  
      className="sidebar">

      <div></div>
      <span> {languageToggle ? 'Me siga' : 'Follow Me'} </span>

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

    </motion.nav>
  );
};

export default Sidebar;
