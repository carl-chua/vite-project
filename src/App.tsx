import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [buttonPosition, setButtonPosition] = useState({
    top: '50%',
    left: '50%',
  });
  const [timer, setTimer] = useState(30);
  const [timerStarted, setTimerStarted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
    const newTop = Math.random() * 80 + 10 + '%'; // Random position between 10% and 90%
    const newLeft = Math.random() * 80 + 10 + '%'; // Random position between 10% and 90%
    setButtonPosition({ top: newTop, left: newLeft });
    setCount((count) => count + 1);
  };

  const handleRestart = () => {
    setCount(1);
    setButtonPosition({ top: '50%', left: '50%' });
    setTimer(60);
    setTimerStarted(false);
    setShowDialog(false);
  };

  useEffect(() => {
    let interval: number | null = null;
    if (timerStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      if (interval) {
        clearInterval(interval);
      }
      setShowDialog(true);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerStarted, timer]);

  return (
    <>
      <div className="card">
        <button>score is {count}</button>
        <button
          onMouseEnter={!isMobile ? handleMouseEnter : undefined}
          onClick={isMobile ? handleMouseEnter : undefined}
          style={{
            position: 'absolute',
            top: buttonPosition.top,
            left: buttonPosition.left,
            transition: 'top 0.3s, left 0.3s',
          }}
        >
          {isMobile ? 'Tap me!' : 'Hover over me!'}
        </button>
        <p>Time remaining: {timer} seconds</p>
      </div>
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <p>Your score is {count}</p>
            <button onClick={handleRestart}>Restart Game</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
