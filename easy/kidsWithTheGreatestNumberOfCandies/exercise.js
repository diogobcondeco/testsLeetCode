function kidsWithTheGreatestNumberOfCandies(candies, extraCandies) {
	let max = 0;
	let possibleAdd = [];
	for (const kid in candies) {
		if (candies[kid] > max) {
			max = candies[kid]
		}
	}
	for (const kid in candies) {
		if (candies[kid] + extraCandies >= max) {
			possibleAdd.push(true);
		} else {
			possibleAdd.push(false);
		}
	}
	return possibleAdd;
};

kidsWithTheGreatestNumberOfCandies([2, 3, 5, 1, 3], 3);