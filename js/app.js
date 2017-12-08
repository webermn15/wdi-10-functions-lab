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

// function transmogrifier(num1, num2, num3) {
// 	let numSum = num1 + num2;
// 	let solution = Math.pow(numSum, num3);
// 	console.log(solution);
// }

// console.log(transmogrifier(5, 4, 3)); //729
// console.log(transmogrifier(13, 12, 5)); //9765625
// console.log(transmogrifier(42, 13, 7)); //1522435234375


// 3

// function maxOfTwoNumbers(num1, num2) {
// 	if (num1 > num2) {
// 		console.log(num1+" is larger");
// 	}
// 	else if (num1 < num2) {
// 		console.log(num2+" is larger");
// 	}
// 	else {
// 		console.log("they are equal");
// 	}
// }


// 4

// function compareNumbers(a,b) {
// 	return a - b;
// }

// function maxOfThree(num1, num2, num3) {
// 	let numArr = [];
// 	numArr.push(num1, num2, num3);
// 	numArr.sort(compareNumbers);
// 	console.log(numArr[numArr.length - 1]);
// }


// 5

let vowels = ['a','e','i','o','u'];

function isVowel(char) {
	if (vowels.includes(char)) {
		return console.log(char+" is a vowel");
	}
	else if (char === 'y') {
		console.log('is '+char+" a vowel??");
	}
	else {
		return console.log(char+" is not a vowel");
	}
}








