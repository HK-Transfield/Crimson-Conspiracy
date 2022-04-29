//import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import Hallway from './routes/Hallway';
import Painting from './routes/Painting';
import Window from './routes/Window';
import Message from './routes/Message';


function App() {



  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/hallway">Home</Link>
            </li>
            <li>
              <Link to="/findme">About</Link>
            </li>
            <li>
              <Link to="/look">Contact</Link>
            </li>
            <li>
              <Link to="/message">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/hallway"><Hallway /></Route>
        <Route path="/findme"><Painting /></Route>
        <Route path="/look"><Window /></Route>
        <Route path="/message"><Message /></Route>
      </Routes>
    </div>
  );
}

export default App;
