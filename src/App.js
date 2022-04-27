import './App.css';
import GlitchedWriter, { wait } from 'glitched-writer';
import './style.scss';



function App() {


  const Writer = new GlitchedWriter('#glitch_this', { letterize: true });

  (async () => {
    await wait(2500);
    await Writer.write("THE VESSELS HAVE CONNECTED");

    await wait(2500);
    await Writer.write("WE WILL BEGIN THE NEXT PHASE");

    await wait(2500);
    await Writer.write("YOU ARE CLOSE");

    await wait(2500);
    await Writer.write("CLOSE TO THE NEXT KEY");

    await wait(2500);
    await Writer.write("IT IS NOT FAR");

    await wait(2500);
    await Writer.write("BUT BEWARE");

    await wait(2500);
    await Writer.write("THE EYE AND ITS DEMONS DRAW NEAR");

    await wait(2500);
    await Writer.write("THE FEAST IS UPON US");

    await wait(2500);
    await Writer.write("TIME IS SHORT");

    await wait(2500);
    await Writer.write("FAILURE WILL RESULT IN");

    await wait(2500);
    await Writer.write("ERADICATION");

    await wait(2500);
    await Writer.write("DO NOT FEAR");

    await wait(2500);
    await Writer.write("WE ARE WATCHING");

    await wait(2500);
    await Writer.write("WE ARE OBSERVING");

    await wait(2500);
    await Writer.write("WE SEE YOUR PERFORMANCE");

    await wait(2500);
    await Writer.write("I WILL VISIT YOU");

    await wait(2500);
    await Writer.write("VERY");

    await wait(2500);
    await Writer.write("SOON");

    await wait(2500);
    await Writer.write(" CRIMSON CONSPIRACY 29.04.2022");
  })();

  return (

    <div className="App">
      <div className="text" id="glitch_this"></div>
    </div>
  );
}

export default App;
