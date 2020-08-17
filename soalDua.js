var inputData = [1, 3, 4, 5];

function getValue(arrayData, indexLength) {
	if (arrayData.length == 0) {
		return "Panjang Array minimal 1";
	} else if (indexLength >= arrayData.length) {
		return "Array tidak memiliki index ke-" + indexLength;
	} else {
		return "Array index ke-" + indexLength + " : " + arrayData[indexLength];
	}
}

console.log(getValue(inputData, 2));