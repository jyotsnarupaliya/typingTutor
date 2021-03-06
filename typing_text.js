var simpleText = "python is an interpreted high-level programming language for general purpose programming. created by guido van rossum and first released in 1991, python has a design philosophy that emphasizes code readability, and a syntax that allows programmers to express concepts in fewer lines of code, notably using significant whitespace. it provides constructs that enable clear programming on both small and large scales. python features a dynamic type system and automatic memory management. it supports multiple programming paradigms, including object-oriented, imperative, functional and procedural, and has a large and comprehensive standard library. python interpreters are available for many operating systems. cpython, the reference implementation of python, is open source software and has a community-based development model, as do nearly all of its variant implementations. cpython is managed by the non-profit python Software Foundation."

var typingArea = document.getElementById('typingArea')
// typingArea.textContent = simpleText
console.log(simpleText.length)
for (var i = 0 ; i < simpleText.length - 1; i++) {
	simpleText[i]

	var letter = document.createElement("span")
	letter.innerHTML = simpleText[i]
	typingArea.appendChild(letter)
};