import React from 'react'
import NameAndJob from './components/NameAndJob.js'
import SocialMediaBtns from './components/SocialMediaBtns.js'
import BackgroundImg from './images/portfolioBG.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nameAndSocial'>
          <NameAndJob />
          <SocialMediaBtns />
      </div>
    </div>
  );
}

export default App;
