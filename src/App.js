import './App.css';
import GlitchedWriter, { queueWrite, wait } from 'glitched-writer';
import './style.scss';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce'


function App() {

  const Writer = new GlitchedWriter('#glitch_this', { letterize: true });
  //Writer.queueWrite('#phrases', 2500, false)



  return (
    <div className="App">
      <div className="text" id="glitch_this">
        <div id="phrases" style={{ display: 'none' }}>
          <p>THE VESSEL HAS CONNECTED</p>
          <p>WE WILL BEGIN THE NEXT PHASE</p>
          <p>YOU ARE CLOSE</p>
          <p>CLOSE TO THE NEXT KEY</p>
          <p>IT IS NOT FAR</p>
          <p>BUT BEWARE</p>
          <p>THE EYE AND ITS DEMONS DRAW NEAR</p>
          <p>THE FEAST IS UPON US</p>
          <p>TIME IS SHORT</p>
          <p>FAILURE WILL RESULT IN</p>
          <p>ERADICATION</p>
          <p>DO NOT FEAR</p>
          <p>WE ARE WATCHING</p>
          <p>WE ARE OBSERVING</p>
          <p>WE SEE YOUR PERFORMANCE</p>
          <p>I WILL VISIT YOU</p>
          <p>VERY</p>
          <p>SOON</p>
          <p>CRIMSON CONSPIRACY 29.04.2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
