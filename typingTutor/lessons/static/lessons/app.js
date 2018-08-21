var count = 0
var wrongCount = 0

function KeyFunction(e) {
   	var enteredKey = e.key
      var asc = enteredKey.charCodeAt(0)

      var spans = document.getElementById('typingArea').getElementsByTagName('span')
      console.log("length", spans.length)


      if (asc <= 122 && asc >= 32)
      {
            var typingArea = document.getElementById('typingArea')
      	var expectedKey = typingArea.textContent[count]
      	var output = document.getElementById("output")
      	var outspan = document.createElement('span')

      	outspan.style.color = "black"
            outspan.style.background = "red"
            wrongCount = wrongCount + 1
      	if (enteredKey == expectedKey) {
      		outspan.style.color = "#33ff39"
                  outspan.style.background = "none"
                  wrongCount = wrongCount - 1
      	}

      	outspan.innerHTML = enteredKey
      	output.appendChild(outspan)

            var spans = document.getElementById('typingArea').getElementsByTagName('span')
            currentSpan = spans[count]
            currentSpan.style.textDecoration = "underline"
            currentSpan.style.background = 'grey'

      	count = count + 1
      }
      

      total = document.getElementById("total")
      total.value = spans.length

      right = document.getElementById("right")
      right.value = count - wrongCount

      wrong = document.getElementById("wrong")
      wrong.value = wrongCount
}
