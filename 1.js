var inputWord = prompt("Masukkan kata : ");

function reverseWord(word) {
	var reverse = "";
	for (var i = word.length - 1; i >= 0; i--) {
		reverse += word[i];
	}

	return reverse;
}

console.log(reverseWord(inputWord));
