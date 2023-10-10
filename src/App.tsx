
import { motion, useInView, useAnimation } from 'framer-motion';


import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {


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
        
        <div className="app-wrapper">
          
          <div className="app-title">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate="visible"
              transition={{duration: 0.4, delay: 0.25}}
            >
              <h1>Hello, I am</h1>
              <div className="app-title_desc">
                <p>A <span className="highlighted-white">front-end</span> developer fascinating with <span className="highlighted-white" >modern</span> styles</p>
              </div>
              <h2>
                <span>Thiago</span>
                <span className="text-hidden">Front end developer</span>
              </h2>
            </motion.div>
            <button className="app-title_btn">Download cv</button>
          </div>
          
          <div className="scrollDown">
            <span>Scroll Down</span>
            <span></span>
          </div>
        </div>
      </header>
      <main className="app-main"></main>
      
    </>
  );
}

export default App;
