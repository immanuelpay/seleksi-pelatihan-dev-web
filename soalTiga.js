function getValue() {
	var joinChar = " ";
	for (var i = 0; i < arguments.length; i++) {
		joinChar += arguments[i] + " ";
	}

	return joinChar;
}

console.log(getValue("Semangat", "mengerjakan", "soal", "seleksi"));