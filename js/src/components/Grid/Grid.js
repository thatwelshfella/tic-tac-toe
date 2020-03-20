import React from "react";
import PropTypes from "prop-types";

import Square from "../Square/Square";
import { number } from "./formConfig";

import styles from "./Grid.module.css";

const Grid = ({ winner, placement, handlePlacement }) => {
  return (
    <div className={styles.boxContainer}>
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
  );
};

Grid.propTypes = {
  winner: PropTypes.string,
  placement: PropTypes.object.isRequired,
  handlePlacement: PropTypes.func.isRequired
};

Grid.defaultProps = {
  winner: ""
};

export default Grid;
