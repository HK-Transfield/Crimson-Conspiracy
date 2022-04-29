//import './App.css';
import './style.scss';
import GlitchedWriter from 'glitched-writer';
import { useEffect } from 'react';


const phrases = [
  "THE VESSEL HAS CONNECTED",
  "WE WILL BEGIN THE NEXT PHASE",
  "YOU ARE CLOSE",
  "CLOSE TO THE NEXT KEY",
  "IT IS NOT FAR",
  "BUT BEWARE",
  "THE EYE AND ITS DEMONS DRAW NEAR",
  "THE FEAST IS UPON US",
  "TIME IS SHORT",
  "FAILURE WILL RESULT IN",
  "ERADICATION",
  "DO NOT FEAR",
  "WE ARE WATCHING",
  "WE ARE OBSERVING",
  "WE SEE YOUR PERFORMANCE",
  "I WILL VISIT YOU",
  "VERY",
  "SOON",
  "CRIMSON CONSPIRACY 29.04.2022",
]


function App() {

  useEffect(() => {
    const glitch = document.getElementById('glitch_this');
    const Writer = new GlitchedWriter(glitch, { letterize: true });
    Writer.queueWrite(phrases, 2500, false)
  })

  return (
    <div className="App">
      <div className="text" id="glitch_this">
        <div id="phrases" style={{ display: 'none' }}>

        </div>
      </div>
    </div>
  );
}

export default App;
