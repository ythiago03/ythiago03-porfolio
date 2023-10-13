
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import AnimatedText from './Components/AnimatedText/AnimatedText';
import githubIcon from './assets/github-icon.svg';
import instagramIcon from './assets/instagram-icon.svg';
import linkedinIcon from './assets/linkedin-icon.svg';
import brainIcon from './assets/brain-icon.svg';
import heartIcon from './assets/heart-icon.svg';
import Cv from '../public/Thiago Fidêncio Cv.pdf';
import webDevIcon from './assets/web-dev-icon.svg';
import emailIcon from './assets/email-icon.svg';
import IconButton from './Components/IconButton/IconButton';
import CardProject from './Components/CardProject/CardProject';

function App() {
  const motionTitle = 'Hello, I am'.split('');
  const motionTitle2 = 'thiago'.split('');
  const useAtWork = ['JavaScript','TypeScript','React','HTML','CSS','Azure','NodeJS','Git','Github','Firebase'];
  const learningProcess = ['Tailwind','NextJS','MySQL','Figma','Jest'];

  return (
    <>
      
      <header id="home" className="app-header">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.6, delay: 0.25}}
        >
          <Navbar/>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -300 },
            visible: { opacity: 1, y: -125}
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.6, delay: 0.25}}
        >
          <Sidebar/>
        </motion.div>
        
        <div className="header-wrapper">
          
          <div className="header-title">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              transition={{duration: 0.4, delay: 0.25}}
            >
               
              {
                motionTitle.map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>)
              }
              
                
            
              <div className="header-title_desc">
                <p>A <span className="highlighted-white">front-end</span> developer fascinating with <span className="highlighted-white" >modern</span> styles</p>
              </div>
              {
                motionTitle2.map((letter, i) => <AnimatedText key={i}>{letter === ' ' ? '\u00A0' : letter}</AnimatedText>)
              }
              {/* <h2>
                <span>Thiago</span>
                <span className="text-hidden">Front end developer</span>
              </h2> */}
            </motion.div>
            <a className="header-title_btn" href={Cv} download={Cv} >Download cv</a>
          </div>
          
          
          <Link className="scrollDown" to="about" spy={true} smooth={true} offset={50} duration={500}>
            <span>Scroll Down</span>
            <span></span>
          </Link>
          
        </div>
      </header>

      <main className="app-main">

        <section id="about" className="about">
          <div className="about-head">
            <h2>About<span>.</span></h2>
            <span></span>
          </div>
          <div className="about-wrapper">
            <section className="about-left">
              <p>
              Hello, my name is Thiago Fidêncio and I&#39;m a front-end developer.
              Since I was a child, I&#39;ve always been interested in games and technology, I&#39;ve always liked creating something from scratch and understanding how things work. I believe that creating logical and creative solutions is one of the factors that most attracts me to studying and working with programming.
              </p>
              <p>
                  I&#39;m currently learning
              </p>
              <p>
                I&#39;m passionate about programming, animes, games and pixel art
              </p>
              <p>
                  Impedit rerum natus nihil perspiciatis, aliquam dolor harum at voluptas quasi doloremque accusantium provident consectetur atque. Recusandae accusantium, quas possimus exercitationem mollitia iste, architecto consectetur unde magni sed dolorem. Excepturi!
              </p>

              <div className="about-links">
                <span>My links {'->'}</span>
                <ul>
                  <li>
                    <IconButton text="Linkedin" href="https://www.linkedin.com/in/ythiago03/">
                      <img src={linkedinIcon} alt="Link com a logo do Linkedin" />      
                    </IconButton>
                  </li>
                  <li>
                    <IconButton text="Github" href="https://github.com/ythiago03">
                      <img src={githubIcon} alt="Link com a logo do Github" />      
                    </IconButton>
                  </li>
                  <li>
                    <IconButton text="Instagram" href="https://www.instagram.com/ythiago03/">
                      <img src={instagramIcon} alt="Link com a logo do Instagram" />    
                    </IconButton>
                  </li>
                </ul>
              </div>
            </section>

            <section className="about-right">
              <div className="skills-wrapper">
                <div>
                  <img src={webDevIcon} alt="Ícone de código" />
                  <h3>Use at work</h3>
                </div>
                <div className="skills">
                  {useAtWork.map((skill, index) => <span key={index}>{skill}</span> )}
                </div>
              </div>
              <div className="skills-wrapper">
                <div>
                  <img src={brainIcon} alt="Ícone de cérebro" />
                  <h3>Learning Process</h3>
                </div>
                <div className="skills">
                  {learningProcess.map((skill, index) => <span key={index}>{skill}</span> )}
                </div>
              </div>
            </section>
          </div>
          
        </section>

        <section id="projects" className="projects">
          <div className="projects-head">
            <span></span>
            <h2>Projects<span>.</span></h2>
          </div>
          <div className="cards">
            <CardProject 
              cardCover="../../../public/Purpleframe.jpg" 
              name="Purpleframe"
              tecs={['React','Javascrit','HTML', 'CSS', 'Firebase']}
              repo="https://github.com/ythiago03/purpleframe"
              demo="https://purpleframe.vercel.app/login"
              desc="PurpleFrame is a photo and video sharing social networking service owned by American company Meta Platforms."
            />
            <CardProject 
              cardCover="../../../public/Aluraflix.jpg" 
              name="Aluraflix"
              tecs={['Javascrit','HTML', 'CSS']}
              repo="https://github.com/ythiago03/aluraImersao/tree/main/aula4-5"
              demo="https://ythiagoalurafilx.netlify.app/"
              desc="Aluraflix is a movie and anime app made with immersion dev in which you can add new movies/animes or remove them."
            />
            <CardProject 
              cardCover="../../../public/Homzy.jpg" 
              name="Homzy"
              tecs={['React','Javascrit','HTML', 'CSS']}
              repo="https://github.com/ythiago03/Homzy-Landingpage"
              demo="https://homzy.vercel.app/"
              desc="Homzy is a page for purchasing high-quality and super modernized properties."
            />
            <CardProject 
              cardCover="../../../public/AtomBank.jpg" 
              name="AtomBank"
              tecs={['React','Javascrit','HTML', 'CSS']}
              repo="https://github.com/ythiago03/AtomBank"
              demo="https://atom-bank.vercel.app/"
              desc="AtomBank is a banking app where you have everything in the palm of your hand."
            />
          </div>
        </section>  

        <section id="contact" className="contact">
          <div className="contact-head">
            <span></span>
            <h2>Contact<span>.</span></h2>
            <span></span>
          </div>
          <div className="contact-wrapper">
            <p>
              Send me a email or chat me on 
              <a href="https://www.linkedin.com/in/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                Linkedin
              </a> 
               or 
              <a href="https://www.instagram.com/ythiago03/" className="highlighted-white" target="_blank" rel="noreferrer" >
                Instagram
              </a>
            </p>
            <a  href="mailto:ythiagohcfidencio@gmail.com" className="highlighted-white" target="_blank" rel="noreferrer">
              <img src={emailIcon} alt="" />ythiagohcfidencio@gmail.com
            </a>
          </div>    
        </section>      

      </main>

      <footer className="app-footer">
        <span>Made with <img src={heartIcon} alt="" /> by <a href="https://github.com/ythiago03"target="_blank" rel="noreferrer" >Thiago<span>.</span></a></span>
      </footer>
    </>
  );
}

export default App;
