import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = ({ placement, value, ...props }) => {
	return (
		<button className="box" value={value} {...props}>
			{placement[value] === "Crosses" && <FontAwesomeIcon icon="times" size='3x'/>}
			{placement[value] === "Naughts" && (
				<FontAwesomeIcon icon={["far", "circle"]} size='3x'/>
			)}
		</button>
	);
};

export default Button;
