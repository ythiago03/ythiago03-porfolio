/* UTILS */
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'; 
/* Style and Icons */
import './Navbar.css';

import icon from '../../assets/T-icon.svg';


const Navbar = () => {

  const getCurrentDimension = () => window.innerWidth;

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [toggle, setToggle] =useState(false);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);
    
    return(() => {
      window.removeEventListener('resize', updateDimension);
    });
  }, [screenSize]);
  
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
      
      <ul style={{
        right: toggle ? '0' : '-300px'
      }} >

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
      {
        screenSize <= 670 && <img className="icon__mobile" src={icon} alt="Logo em forma de T"/>
      }
      <div onClick={() => setToggle(!toggle)} className="icon">
        <img src={icon} alt="Logo em forma de T" />
      </div>

    </motion.nav>
  );
};

export default Navbar;
