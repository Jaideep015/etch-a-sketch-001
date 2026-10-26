const container = document.querySelector("#container")
const body = document.querySelector("body")

const undo = document.createElement("Button")
undo.textContent = "Undo"
undo.addEventListener("click", () => {
	let lastSquare = history.pop()
	lastSquare.style.backgroundColor = "white"
 }
)
body.appendChild(undo)


let history = []
let length = 16

const gridSize = document.querySelector("#size")
gridSize.addEventListener("click", () => {
	eraseOldGrid()
	getlength()
	createGrid()
})

function eraseOldGrid() {
	for (let i = length * length ; i > 0; i--) {
		container.removeChild(container.lastElementChild)
	}
	history.length = 0;
}

function getlength() {
	length = prompt("Enter the length of the grid(max 100):")
	while (!(length > 0 && length <= 100) && (length !== null)) {
		alert("Invalid value.Enter a value in the range 0 to 100")
		length = prompt("Enter the length of the grid(max 100):")
	}
}

function createGrid() {
	if (length == null) {
		length = 16
	}
	const totalsquares = length * length
	for (let i = 1; i <= totalsquares; i++) {
		const square = document.createElement("div")
		square.classList.add("square")
		square.style.width = `${(1/length)*100}%`
		square.style.height = `${(1/length)*100}%`
		container.appendChild(square)
		
		square.addEventListener("click", (event) => {
			square.style.backgroundColor = "black"
			history.push(event.target)
		})
	}
}

createGrid()




