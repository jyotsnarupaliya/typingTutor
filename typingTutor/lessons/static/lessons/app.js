var count = 0
iivar wrongCount = 0

function KeyFunction(e) {
   	var enteredKey = e.key
      var asc = enteredKey.charCodeAt(0)

      var spans = document.getElementById('typingArea').getElementsByTagName('span')
      console.log("length", spans.length)


      if (asc <= 122 && asc >= 32)
      {
            var typingArea = document.getElementById('typingArea')
      	var expectedKey = typingArea.textContent[count]
      	var output = document.getElementById("result")
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
      if (count === spans.length) 
      {
            console.log("wrongCount = ", wrongCount)
            div = document.createElement("DIV")
            
            heading = document.createElement("input")
            heading.type = "text"
            heading.style.background = "none"
            heading.style.border = "none"
            heading.readonly = "true"
            heading.value = "SUMMARY"

            total = document.createElement("input")
            total.type = "text"
            total.style.background = "none"
            total.style.border = "none"
            total.readonly = "true"
            total.value = "Total = " + spans.length

            right = document.createElement("input")
            right.type = "text"
            right.style.background = "none"
            right.style.border = "none"
            right.readonly = "true"
            right.value = "right = " + (spans.length - wrongCount)

            wrong = document.createElement("input")
            wrong.type = "text"
            wrong.style.background = "none"
            wrong.style.border = "none"
            wrong.readonly = "true"
            wrong.value = "Wrong = " + wrongCount

            div.appendChild(heading)
            div.appendChild(document.createElement("br"))
            div.appendChild(total)
            div.appendChild(document.createElement("br"))
            div.appendChild(right)
            div.appendChild(document.createElement("br"))
            div.appendChild(wrong)
            div.appendChild(document.createElement("br"))

            body = document.getElementsByTagName("body")[0]
            console.log(body)

            body.appendChild(div)
      };
}
