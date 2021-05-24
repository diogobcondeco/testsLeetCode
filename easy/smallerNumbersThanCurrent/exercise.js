function smallerNumbersThanCurrent(nums) {
	let amountOfSmallerNumbers = [];

	for (const num in nums) {
		let amount = 0;
		for (const smaller in nums) {
			if (num !== smaller) {
				if (nums[smaller] < nums[num]) {
					amount++
				}
			}
		}
		amountOfSmallerNumbers.push(amount);
	}
	console.log(amountOfSmallerNumbers);
	return amountOfSmallerNumbers;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
smallerNumbersThanCurrent([6, 5, 4, 8]);
smallerNumbersThanCurrent([7, 7, 7, 7]);