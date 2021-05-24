function restoreString(s, indices) {
	let oldString = s.split("");
	let finalArray = new Array(s.lenght).fill(0);
	oldString.map((oldChar, i) => {
		finalArray[i] = s[indices.indexOf(i)]
	})
	console.log(finalArray.join(""));
	return finalArray.join("");
};


restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
restoreString("abc", [0, 1, 2]);
restoreString("aiohn", [3, 1, 4, 2, 0]);
restoreString("aaiougrt", [4, 0, 2, 6, 7, 3, 1, 5]);
restoreString("art", [1, 0, 2]);