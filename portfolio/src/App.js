import React from 'react'
import NameAndJob from './components/NameAndJob.js'
import SocialMediaBtns from './components/SocialMediaBtns.js'
import ParticleBG from './components/Particle.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nameAndSocial'>
          <NameAndJob />
          <SocialMediaBtns />
          <ParticleBG />
      </div>
    </div>
  );
}

export default App;
