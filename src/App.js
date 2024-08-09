import './App.css';
import React, { useState } from 'react';



function App() {
//useState
  

  const [audioProgress, setAudioProgress] = useState(60)

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
  };

  return (
    <>
    <div className="container">
      <video src="./Videos/1.mp4" autoPlay muted loop
      className='backgroundVideo'></video>
      <div className="blackScreen"></div>
      <div className="music-Container">
        <p className='musicPlayer'>Music Player</p>
        <p className='music-Head-Name'>Chasing</p>
        <p className='music-Artist-Name'>Gangadara</p>
        <img src="./Images/1.jpg" alt="song Avatar" id='songAvatar'/>
        <div className="musicTimeDiv">
          <p className='musicCurrentTime'>00 : 00</p>
          <p className='musicTotalLength'>03 : 49</p>
        </div>
        <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar}/>
        <div className="musicControlers">
          <i className='da-solid fa-backward'></i>
          <i className='da-solid fa-circle-play'></i>
          <i className='da-solid fa-forward'></i>
        </div>
    </div>
    </div>
    </>
  );
}

export default App;
