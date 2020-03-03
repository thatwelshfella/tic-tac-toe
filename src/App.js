import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./components/Square";
import { selectWinner } from "./logic";

const App = () => {
  const initialState = { player: "Crosses", placement: {}, winner: null };
  const [player, setPlayer] = useState(initialState.player);
  const [placement, setPlacement] = useState(initialState.placement);
  const [winner, setWinner] = useState(initialState.winner);

  const handlePlacement = ({ target }) => {
    setPlacement({ ...placement, [target.value]: player });
    setPlayer(player === "Crosses" ? "Naughts" : "Crosses");
  };

  const resetGame = () => {
    setWinner(initialState.winner);
    setPlacement(initialState.placement);
    setPlayer(initialState.player);
  };

  const number = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];

  useEffect(() => {
    setWinner(selectWinner(placement));
  }, [placement]);

  return (
    <>
      <div className="page-container">
        <h1>Tic-Tac-Toe</h1>
        {winner ? (
          <>
            <h3>The winner is {winner}</h3>
            <button onClick={resetGame}>Want to play again?</button>
          </>
        ) : (
          <h3>Current player is: {player}</h3>
        )}
        <div className="box-container">
          {number.map(n => (
            <Square
              disabled={winner}
              key={n}
              placement={placement}
              value={n}
              onClick={handlePlacement}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
