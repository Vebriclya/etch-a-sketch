const container = document.querySelector("#container");
const dropdown = document.querySelector("#sizeDropdown");
const boxes = document.querySelectorAll(".sketch-divs");
const colourButton = document.querySelector("#colourfy");
let colourButtonPressed = false;
const gradientButton = document.querySelector("#gradient");
let gradientButtonPressed = false;
const shaderButton = document.querySelector("#shade");
let shaderButtonPressed = false;
let currentColour = "black";
let currentOpacity = 0.1;
const colourArray = [
  "#171719",
  "#5b3b81",
  "#8f8aba",
  "#bc5ddd",
  "#ff5fce",
  "#ffc6dc",
  "#8d4450",
  "#e37651",
  "#ffc5ad",
  "#a6272e",
  "#df425d",
  "#ff9b53",
  "#ffed00",
  "#ace11a",
  "#40aa6d",
  "#426939",
  "#2136ae",
  "#1e7ace",
  "#22d5cf",
  "#59ffd8",
  "#42464a",
  "#686e75",
  "#b6b6b6",
];
const colourGradient = [
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
    shaderButtonPressed = false;
    gradientButtonPressed = false;
  } else {
    colourButtonPressed = false;
    currentColour = "black";
  }
  console.log(colourButtonPressed);
});

gradientButton.addEventListener("click", () => {
  if (gradientButtonPressed === false) {
    gradientButtonPressed = true;
    colourButtonPressed = false;
    shaderButtonPressed = false;
  } else {
    gradientButtonPressed = false;
    currentColour = black;
  }
});

shaderButton.addEventListener("click", () => {
  if (shaderButtonPressed === false) {
    shaderButtonPressed = true;
    colourButtonPressed = false;
    gradientButtonPressed = false;
  } else {
    shaderButtonPressed = false;
    currentColour = "black";
  }
  console.log(shaderButtonPressed);
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
          currentColour = colourArray[Math.floor(Math.random() * 23)];
          e.target.style.background = currentColour;
          console.log(currentColour);
        } else if (gradientButtonPressed) {
          currentColour = gradient();
          e.target.style.background = currentColour;
          console.log(currentColour);
        } else if (shaderButtonPressed) {
          /*currentColour = `rgba(0, 0, 0, ${currentOpacity})`;
          currentOpacity = boxes.forEach((box) => {
            Number(box.style.backgroundColor.slice(-3));
          });
          if (currentOpacity <= 1) {
            currentOpacity += 0.1;
          }
          e.target.style.background = currentColour;*/
          console.log(currentColour);
          console.log(currentOpacity);
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

function gradient() {
  let output = "";
  for (let i = 0; i < colourGradient.length; i++) {
    output = colourGradient[i];
  }

  return output;
}

function shader() {
  if (currentColour != "#000000") {
    currentColour = `rgba(0, 0, 0, 0)`;
    //let currentOpacity = Number(boxes.style.backgroundColor.slice(-4, -1));
    if (currentOpacity <= 1) {
      currentColour = `rgba(0, 0, 0, (${currentOpacity} + 0.1))`;
    }
  }
  return currentColour;
}
