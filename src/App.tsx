import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Game from './pages/Game';
import Scanner from './pages/Scanner';
import SSR from './pages/SSR';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center h-screen">
        <nav>
          <Link to="/vite-project/scanner">Scanner</Link>
          {' | '}
          <Link to="/vite-project/game">Game</Link>
        </nav>
        <Routes>
          <Route path="/vite-project/scanner" element={<Scanner />} />
          <Route path="/vite-project/game" element={<Game />} />
          {/* Add a route for the base path */}
          <Route path="/vite-project/" element={<SSR />} />
          {/* Default route */}
          <Route path="*" element={<SSR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
