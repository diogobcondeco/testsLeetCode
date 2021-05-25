function createTargetArray(nums, index) {
	let targetArray = new Array();
	nums.map((item, i) => {
		targetArray.splice(index[i], 0, item);
	})
	console.log(targetArray);
	return targetArray;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]);
createTargetArray([1], [0]);
