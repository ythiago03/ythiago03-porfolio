/* UTILS */
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useEffect, useState, useContext } from 'react'; 
import { AppContext } from '../../App';
/* Style and Icons */
import './Navbar.css';

import icon from '../../assets/T-icon.svg';
import brasilIcon from '../../assets/brasil-icon.svg';
import euaIcon from '../../assets/eua-icon.svg';


const Navbar = () => {

  const getCurrentDimension = () => window.innerWidth;

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [toggle, setToggle] =useState(false);
  const {languageToggle, setLanguageToggle} = useContext(AppContext);

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
      }} 
      >

        <li>
          <Link onClick={() => setToggle(!toggle)} className="highlighted-white" to="about" spy={true} smooth={true} offset={50} duration={500}>
            {languageToggle ? 'Sobre' : 'About'}
          </Link>
        </li>

        <li>
          <Link onClick={() => setToggle(!toggle)} className="highlighted-white" to="projects" spy={true} smooth={true} offset={50} duration={500}>
            {languageToggle ? 'Projetos' : 'Projects'}            
          </Link>
        </li>

        <li>
          <Link onClick={() => setToggle(!toggle)} className="highlighted-white" to="contact" spy={true} smooth={true} offset={50} duration={500}>
            {languageToggle ? 'Contato' : 'Contact'}
          </Link>
        </li>
        
        <li>
          <button className="language" onClick={() => setLanguageToggle(!languageToggle)}>
            {languageToggle ? <img src={brasilIcon} alt="Logo em forma de T"/> : <img src={euaIcon} alt="Logo em forma de T"/> }</button>
        </li>

      </ul>
      {
        screenSize <= 670 && <img className="icon__mobile" src={icon} alt="Logo em forma de T"/>
      }
      <div onClick={() => setToggle(!toggle)} className="icon">
        {
          screenSize >= 671 
            ? <img src={icon} alt="Logo em forma de T"/>
            : <span className={`${ toggle && 'close' } menu-hamburguer`} ></span>
        }
      </div>

    </motion.nav>
  );
};

export default Navbar;
