import React from "react";
import PropTypes from "prop-types";

const Header = ({ winner, resetGame, player }) => {
  return (
    <>
      {winner ? (
        <>
          <h3>The winner is {winner}</h3>
          <button onClick={resetGame}>Want to play again?</button>
        </>
      ) : (
        <h3>Current player is: {player}</h3>
      )}
    </>
  );
};

Header.propTypes = {
  winner: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired
};

export default Header;
