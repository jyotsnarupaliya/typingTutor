function setText(simpleText) {
	var typingArea = document.getElementById('typingArea')
	typingArea.innerHTML = ""

	for (var i = 0 ; i < simpleText.length - 1; i++) {
		simpleText[i]

		var letter = document.createElement("span")
		letter.innerHTML = simpleText[i]
		typingArea.appendChild(letter)
	};
}

function updateLesson (button) {
	var request = new XMLHttpRequest()
	request.responseType = "text"
	var url = "lesson/getText/" + button.textContent
	var p = button.parentNode
	console.log(url)

	request.open('GET', url);
	request.send();

	request.onload = function() {
		response = JSON.parse(request.response)
		console.log(response)
	}
}