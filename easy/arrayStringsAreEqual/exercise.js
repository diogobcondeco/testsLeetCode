function arrayStringsAreEqual(word1, word2) {
	let wordOne = "";
	let wordTwo = "";

	for (const element of word1) {
		wordOne = wordOne.concat(element);
	}

	for (const element of word2) {
		wordTwo = wordTwo.concat(element);
	}

	console.log(wordOne)
	console.log(wordTwo)

	if (wordOne === wordTwo) {
		return true;
	} else {
		return false;
	}
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
arrayStringsAreEqual(["a", "cb"], ["ab", "c"]);
arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]);