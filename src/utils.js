export const sortAsc = (dataDisplay, setDataDisplay) => {
	const sortAsc = [...dataDisplay].sort((a, b) => {
		return a.reduce((c, d) => c + d) - b.reduce((c, d) => c + d);
	});
	const secondSort = [...sortAsc].sort((a, b) => {
		const sumA = a.reduce((c, d) => c + d);
		const sumB = b.reduce((c, d) => c + d);
		if (sumA == sumB) {
			return a[0] - b[0];
		} else sumA - sumB;
	});
	setDataDisplay(secondSort);
};

export const sortDesc = (dataDisplay, setDataDisplay) => {
	const sortDesc = [...dataDisplay].sort((a, b) => {
		return b.reduce((c, d) => c + d) - a.reduce((c, d) => c + d);
	});
	const secondSort = [...sortDesc].sort((a, b) => {
		const sumA = a.reduce((c, d) => c + d);
		const sumB = b.reduce((c, d) => c + d);
		if (sumA == sumB) {
			return b[0] - a[0];
		} else sumB - sumA;
	});
	setDataDisplay(secondSort);
};

export const flipCard = (dataDisplay, setDataDisplay) => {
	const flipCard = [...dataDisplay].map((n) => {
		return [n[1], n[0]];
	});
	setDataDisplay(flipCard);
};

export const deleteDup = (dataDisplay, setDataDisplay) => {
	const deleteDup = [...dataDisplay].filter((n) => n[0] !== n[1]);
	setDataDisplay(deleteDup);
};

export const reset = (setDataDisplay, data) => {
	const reset = [...data];
	setDataDisplay(reset);
};

export const remove = (dataDisplay, setDataDisplay, value) => {
	const sumValue = Number(value);
	const newData = [...dataDisplay].filter((n) => n[0] + n[1] !== sumValue);
	setDataDisplay(newData);
};
