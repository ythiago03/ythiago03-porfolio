/* UTILS */
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

/* Style and Icons */
import './Navbar.css';

import icon from '../../assets/T-icon.svg';


const Navbar = () => {

  
  return (
    
    <motion.nav
      variants={{
        hidden: { opacity: 0, x: -300 },
        visible: { opacity: 1, x: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{duration: 0.6, delay: 0.25}}
      className="navbar"
    >
      
      <ul>

        <li>
          <Link className="highlighted-white" to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link className="highlighted-white" to="projects" spy={true} smooth={true} offset={50} duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link className="highlighted-white" to="contact" spy={true} smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>

      </ul>

      <div className="icon">
        <img src={icon} alt="Logo em forma de T" />
      </div>

    </motion.nav>
  );
};

export default Navbar;
