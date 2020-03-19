import React, { useState, useEffect } from "react";
import { selectWinner } from "./logic";
import Grid from "./components/Grid/Grid";
import { ai } from "./ai";

import Header from "./components/Header/Header";

import styles from "./App.module.css";

const App = () => {
  const initialState = { player: "Crosses", placement: {}, winner: null };
  const [player, setPlayer] = useState(initialState.player);
  const [placement, setPlacement] = useState(initialState.placement);
  const [winner, setWinner] = useState(initialState.winner);

  const handlePlacement = ({ target }) => {
    setPlacement({ ...placement, [target.value]: player });
    setPlayer(player === "Crosses" ? "Naughts" : "Crosses");
    console.log(ai());
  };

  const resetGame = () => {
    setWinner(initialState.winner);
    setPlacement(initialState.placement);
    setPlayer(initialState.player);
  };

  useEffect(() => {
    setWinner(selectWinner(placement));
  }, [placement]);

  return (
    <>
      <div className={styles.pageContainer}>
        <h1>Tic-Tac-Toe</h1>
        <Header winner={winner} resetGame={resetGame} player={player} />
        <Grid
          winner={winner}
          placement={placement}
          handlePlacement={handlePlacement}
        />
      </div>
    </>
  );
};

export default App;
