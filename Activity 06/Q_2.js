import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      {isRunning && (
        <button onClick={handleStop}>Stop</button>
      )}
    </div>
  );
}

export default Timer;
