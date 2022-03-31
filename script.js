const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hexColor #......
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	// get random between
	/*
	const randomNumber = getRandomNumber();
	console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber]; */
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
});

function getRandomNumber() {
	// floor return whole
	// random is self-explanatory, produce 0-1
	// ... then times length of array
	//return Math.floor(Math.random() * colors.length);
	return Math.floor(Math.random() * hex.length);
}
