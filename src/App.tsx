
import { motion } from 'framer-motion';


import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import AnimatedText from './Components/AnimatedText/AnimatedText';
import githubIcon from './assets/github-icon.svg';
import instagramIcon from './assets/instagram-icon.svg';
import linkedinIcon from './assets/linkedin-icon.svg';
import brainIcon from './assets/brain-icon.svg';
import webDevIcon from './assets/web-dev-icon.svg';

function App() {
  const motionTitle = 'Hello, I am'.split('');
  const motionTitle2 = 'thiago'.split('');
  const useAtWork = ['JavaScript','TypeScript','React','HTML','CSS','Azure','NodeJS','Git','Github','Firebase'];
  const learningProcess = ['Tailwind','NextJS','MySQL','Figma','Jest'];
  return (
    <>
      
      <header className="app-header">
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
            <button className="header-title_btn">Download cv</button>
          </div>
          
          <div className="scrollDown">
            <span>Scroll Down</span>
            <span></span>
          </div>
        </div>
      </header>
      <main className="app-main">
        <section className="about">
          <div className="about-head">
            <h2>About<span>.</span></h2>
            <span></span>
          </div>
          <div className="about-wrapper">
            <section className="about-left">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ipsam maiores tempore architecto, quos fugiat in itaque, magni vero officia rerum voluptate. Praesentium dolor earum ipsam officia dicta? Ipsam, animi.
              </p>
              <p>
                  Repellendus eius numquam dicta fugit sequi sint, tenetur nobis fugiat, magni ratione, dolorem tempore. Commodi vitae odio assumenda maiores, ullam sit rerum quasi blanditiis quod consequatur quidem doloremque cumque quam.
              </p>
              <p>
                  Facere eius accusantium illum ducimus tempora iste sunt corrupti repellat quam, incidunt dolorum neque vero vitae dolore voluptatum rerum consectetur veritatis quasi qui dolor reiciendis harum ad suscipit. Nihil, numquam.
              </p>
              <p>
                  Impedit rerum natus nihil perspiciatis, aliquam dolor harum at voluptas quasi doloremque accusantium provident consectetur atque. Recusandae accusantium, quas possimus exercitationem mollitia iste, architecto consectetur unde magni sed dolorem. Excepturi!
              </p>

              <div className="about-links">
                <span>My links {'->'}</span>
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
        <section className="projects">
          <div className="projects-head">
            <span></span>
            <h2>Projects<span>.</span></h2>
          </div>
        </section>  
        <section className="projects">
          <div className="projects-head">
            <span></span>
            <h2>Contact<span>.</span></h2>
            <span></span>
          </div>
        </section>         
      </main>
      
    </>
  );
}

export default App;
