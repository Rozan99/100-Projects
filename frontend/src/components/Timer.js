import { useEffect, useState, useRef } from "react";

export default function Timer({ duration, onComplete }) {
  const [secondsLeft, setSecondsLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    let interval = null;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      clearInterval(interval);
      setIsRunning(false);
      if (audioRef.current) audioRef.current.play();
      if (onComplete) onComplete();
    }

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, onComplete]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => setSecondsLeft(duration * 60);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p style={{ margin: 0, fontWeight: "bold" }}>{formatTime(secondsLeft)}</p>
      <button
        onClick={startTimer}
        disabled={isRunning}
        style={{
          backgroundColor: "#44bd32",
          color: "#fff",
          borderRadius: "6px",
        }}
      >
        Start
      </button>
      <button
        onClick={stopTimer}
        disabled={!isRunning}
        style={{
          backgroundColor: "#e1b12c",
          color: "#fff",
          borderRadius: "6px",
        }}
      >
        Stop
      </button>
      <button
        onClick={resetTimer}
        style={{
          backgroundColor: "#718093",
          color: "#fff",
          borderRadius: "6px",
        }}
      >
        Reset
      </button>
      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
        preload="auto"
      />
    </div>
  );
}
