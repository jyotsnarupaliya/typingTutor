var count = 0

function KeyUpFunction(e) {
   	var enteredKey = e.key
   	var expectedKey = document.getElementById('typingArea').textContent[count]
   	var output = document.getElementById("output")
   	var span = document.createElement('span')

   	span.style.color = "#ff5733"
   	if (enteredKey == expectedKey) {
   		span.style.color = "#33ff39"
   	}

   	span.innerHTML = enteredKey
   	output.appendChild(span)

   	count = count + 1
}