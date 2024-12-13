// App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState(5);
  const [message, setMessage] = useState("Guess a number between 1 to 5!");
  const [input, setInput] = useState("");

  const handleGuess = () => {
    const randomNum = Math.floor(Math.random() * 5) + 1; // Generate random number 1 to 5
    const guess = parseInt(input);

    if (isNaN(guess) || guess < 1 || guess > 5) {
      setMessage("Please enter a valid number between 1 and 5.");
      return;
    }

    if (guess === randomNum) {
      setPoints(points + 1);
      setMessage(`Correct! The number was ${randomNum}. +1 point.`);
    } else {
      setPoints(points - 1);
      setMessage(`Wrong! The number was ${randomNum}. -1 point.`);
    }

    if (points + 1 >= 10) {
      setMessage("You win the game! Congratulations!");
      setPoints(5); // Reset the game
    } else if (points - 1 <= 0) {
      setMessage("Game Over! You failed.");
      setPoints(5); // Reset the game
    }

    setInput("");
  };

  return (
    <div className="app">
      <h1>Number Finder Game</h1>
      <p>{message}</p>
      <p>Points: {points}</p>
      <div className="input-container">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number 1-5"
        />
        <button onClick={handleGuess}>Guess</button>
      </div>
    </div>
  );
}

export default App;
