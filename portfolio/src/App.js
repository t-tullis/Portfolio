import React, {useRef} from 'react'
import NameAndJob from './components/NameAndJob.js'
import SocialMediaBtns from './components/SocialMediaBtns.js'
import ParticleBG from './components/Particle.js'
import AboutMe from './components/AboutMe.js'

import './App.css';
function App() {
  let myRef = useRef()

  let onArrowClick = () => {
    window.scrollTo({ 
      behavior: 'smooth', 
      top: myRef.current.offsetTop
    })
  }

  return (
    <div className="App">
      <div className='nameAndSocial'>
          <NameAndJob />
          <SocialMediaBtns 
          onArrowClick={onArrowClick}
          myRef={myRef}/>
      <div ref={myRef}>
          <ParticleBG />
        <AboutMe 
        onArrowClick={onArrowClick}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
