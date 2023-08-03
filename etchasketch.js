const container = document.querySelector("#container");
const dropdown = document.querySelector("#sizeDropdown");
const boxes = document.querySelectorAll(".sketch-divs");
const colourButton = document.querySelector("#colourfy");
let colourButtonPressed = false;
const shaderButton = document.querySelector("#shade");
let currentColour = "pink";
const colourArray = [
  "#0d2b45",
  "#203c56",
  "#544e68",
  "#8d697a",
  "#d08159",
  "#ffaa5e",
  "#ffd4a3",
  "#ffecd6",
];

makeGrid(10);

dropdown.addEventListener("change", () => {
  container.innerHTML = "";
  makeGrid(dropdown.value);
});

colourButton.addEventListener("click", () => {
  if (colourButtonPressed === false) {
    colourButtonPressed = true;
  } else {
    colourButtonPressed = false;
  }
  console.log(colourButtonPressed);

  if (colourButtonPressed) {
    boxes.forEach((box) => {
      console.log("enteredBox");
    });
    //let currentColour = colourArray(Math.floor(Math.random() * 8));
  }
});

function makeGrid(x) {
  container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
  for (let columns = 0; columns < x; columns++) {
    for (let rows = 0; rows < x; rows++) {
      const box = document.createElement("div");
      box.classList.add("sketch-divs");
      container.appendChild(box);
      box.addEventListener("mouseenter", function (e) {
        if (colourButtonPressed) {
          currentColour = colourArray[Math.floor(Math.random() * 8)];
          e.target.style.background = currentColour;
          console.log(currentColour);
        } else {
          e.target.style.background = currentColour;
          currentColour = e.target.style.background;
          console.log(currentColour);
        }
      });
      box.style.zIndex = 0;
    }
  }
}

/*
function colourPicker() {
  let colour = "";
  for(i = 0; i < 8; i++){
    switch(i){
      case 0:
        colour = colourArray[0];
        break;
      case 1:
        colour = colourArray[1];
        break;
      case 2:
        colour = colourArray[2];
        break;
      case 3:
        colour = colourArray[3];
        break;
      case 4:
        colour = colourArray[4];
        break;
      case 5:
        colour = colourArray[5];
        break;
      case 6:
        colour = colourArray[6];
        break;
      case 7:
        colour = colourArray[7];
        break;
    }
    return colour;
}
*/
