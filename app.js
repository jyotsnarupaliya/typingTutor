var count = 0

function KeyUpFunction(e) {
   	var enteredKey = e.key

      console.log("*********")
      console.log(enteredKey)
      console.log(enteredKey.charCodeAt(0))
      var asc = enteredKey.charCodeAt(0)

      if (asc < 122 && asc >= 32)
      {

      	var expectedKey = document.getElementById('typingArea').textContent[count]
      	var output = document.getElementById("output")
      	var span = document.createElement('span')

      	span.style.color = "black"
         span.style.background = "red"
      	if (enteredKey == expectedKey) {
      		span.style.color = "#33ff39"
            span.style.background = "none"
      	}

      	span.innerHTML = enteredKey
      	output.appendChild(span)

      	count = count + 1
      }
}