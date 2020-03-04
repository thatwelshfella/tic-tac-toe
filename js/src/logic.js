export const selectWinner = state => {
	const { one, two, three, four, five, six, seven, eight, nine } = state;

	if (
		(one === "Crosses" && two === "Crosses" && three === "Crosses") ||
		(four === "Crosses" && five === "Crosses" && six === "Crosses") ||
		(seven === "Crosses" && eight === "Crosses" && nine === "Crosses") ||
		(one === "Crosses" && four === "Crosses" && seven === "Crosses") ||
		(two === "Crosses" && five === "Crosses" && eight === "Crosses") ||
		(three === "Crosses" && six === "Crosses" && nine === "Crosses") ||
		(one === "Crosses" && five === "Crosses" && nine === "Crosses") ||
		(three === "Crosses" && five === "Crosses" && seven === "Crosses")
	) {
		return "Crosses";
	} else if (
		(one === "Naughts" && two === "Naughts" && three === "Naughts") ||
		(four === "Naughts" && five === "Naughts" && six === "Naughts") ||
		(seven === "Naughts" && eight === "Naughts" && nine === "Naughts") ||
		(one === "Naughts" && four === "Naughts" && seven === "Naughts") ||
		(two === "Naughts" && five === "Naughts" && eight === "Naughts") ||
		(three === "Naughts" && six === "Naughts" && nine === "Naughts") ||
		(one === "Naughts" && five === "Naughts" && nine === "Naughts") ||
		(three === "Naughts" && five === "Naughts" && seven === "Naughts")
	) {
		return "Naughts";
	}
};
