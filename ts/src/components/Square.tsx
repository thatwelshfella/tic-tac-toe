import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Square.module.css";

const Square = ({ placement, value, ...props }) => {
  return (
    <button className={styles.box} value={value} {...props}>
      {placement[value] === "Crosses" && (
        <FontAwesomeIcon icon="times" size="3x" />
      )}
      {placement[value] === "Naughts" && (
        <FontAwesomeIcon icon={["far", "circle"]} size="3x" />
      )}
    </button>
  );
};

export default Square;
