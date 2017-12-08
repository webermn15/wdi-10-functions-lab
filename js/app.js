// 1

var words = ["hello", "what", "is", "up", "dude"]

function lengths(arr) {
	let wordLengthArr = [];
	for (let i = 0; i <= arr.length - 1; i++) {
		wordLengthArr.push(arr[i].length);
	}
	console.log(wordLengthArr);
}

console.log(lengths(words));