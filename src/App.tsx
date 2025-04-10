import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Game from './pages/Game';
import Scanner from './pages/Scanner';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center h-screen">
        <nav>
          <Link to="/">Scanner</Link> | <Link to="/game">Game</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Scanner />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
