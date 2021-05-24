function jewelsAndStones(jewels, stones) {
	console.log("jewels: " + jewels);
	console.log("stones: " + stones);

	let stonesThatAreJewels = 0;

	for (const stone in stones) {
		console.log(stones[stone])
		for (const jewel in jewels) {
			if (stones[stone] == jewels[jewel]) stonesThatAreJewels++;
		}
	}
	console.log(stonesThatAreJewels);
	return stonesThatAreJewels;
};

jewelsAndStones("aA", "aAAbbbb");
jewelsAndStones("z", "ZZ");