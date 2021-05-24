function subtractProductAndSum(n) {
	let digits = ("" + n).split("");
	console.log(digits)
	// product
	let product = 1;
	digits.map(el => product = product * el);
	// console.log(product)
	// sum
	let sum = 0;
	digits.map(el => sum = sum + parseInt(el))
	// console.log(sum)
	// result
	let result = product - sum;
	console.log(result);
	return result;
};

subtractProductAndSum(234); // 15
subtractProductAndSum(4421); // 21