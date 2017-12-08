// 1

// var words = ["hello", "what", "is", "up", "dude"]

// function lengths(arr) {
// 	let wordLengthArr = [];
// 	for (let i = 0; i <= arr.length - 1; i++) {
// 		wordLengthArr.push(arr[i].length);
// 	}
// 	console.log(wordLengthArr);
// }

// console.log(lengths(words));


// 2

function transmogrifier(num1, num2, num3) {
	let numSum = num1 + num2;
	let solution = Math.pow(numSum, num3);
	console.log(solution);
}