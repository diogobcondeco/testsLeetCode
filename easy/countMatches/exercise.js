function countMatches(items, ruleKey, ruleValue) {
	let itemsThatMatch = [];

	items.map(item => {
		if (ruleKey === "color") {
			if (ruleValue === item[1]) itemsThatMatch.push(item);
		} else if (ruleKey === "type") {
			if (ruleValue === item[0]) itemsThatMatch.push(item);
		} else {
			if (ruleValue === item[2]) itemsThatMatch.push(item);
		}
	})

	console.log(itemsThatMatch.length);
	return itemsThatMatch.length;
};

countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver");
countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone");