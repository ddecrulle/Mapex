export const getFavoriteNumber = (phoneNumbers) => {
	// TODO Control -> If no favorite
	// and format to display
	if (phoneNumbers) {
		const phone =
			phoneNumbers.find((p) => p.favorite === true) ?? phoneNumbers[0];
		return phone.number;
	}
};
