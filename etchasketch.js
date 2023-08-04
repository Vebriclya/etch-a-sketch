const container = document.querySelector("#container");
const dropdown = document.querySelector("#sizeDropdown");
const boxes = document.querySelectorAll(".sketch-divs");
const colourButton = document.querySelector("#colourfy");
let colourButtonPressed = false;
const gradientButton = document.querySelector("#gradient");
let gradientButtonPressed = false;
let gradientNumber = -1;
let loopUp = true;
const shaderButton = document.querySelector("#shade");
let shaderButtonPressed = false;
const eraserButton = document.querySelector("#eraser");
let eraserButtonPressed = false;
let currentColour = "black";
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
    eraserButtonPressed = false;
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
    eraserButtonPressed = false;
  } else {
    gradientButtonPressed = false;
    currentColour = "black";
  }
});

shaderButton.addEventListener("click", () => {
  if (shaderButtonPressed === false) {
    shaderButtonPressed = true;
    colourButtonPressed = false;
    gradientButtonPressed = false;
    eraserButtonPressed = false;
  } else {
    shaderButtonPressed = false;
    currentColour = "black";
  }
  console.log(shaderButtonPressed);
});

eraserButton.addEventListener("click", () => {
  if (eraserButtonPressed === false) {
    eraserButtonPressed = true;
    colourButtonPressed = false;
    gradientButtonPressed = false;
    shaderButtonPressed = false;
  } else {
    eraserButtonPressed = false;
    currentColour = "black";
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
          currentColour = colourArray[Math.floor(Math.random() * 23)];
          e.target.style.background = currentColour;
          console.log(currentColour);
        } else if (gradientButtonPressed) {
          if (gradientNumber === 0) {
            loopUp = true;
            gradientNumber += 1;
            currentColour = colourGradient[gradientNumber];
            e.target.style.background = currentColour;
          } else if (gradientNumber < 8 && loopUp === true) {
            gradientNumber += 1;
            currentColour = colourGradient[gradientNumber];
            e.target.style.background = currentColour;
          } else if (gradientNumber <= 8 && loopUp === false) {
            gradientNumber -= 1;
            currentColour = colourGradient[gradientNumber];
            e.target.style.background = currentColour;
          } else if (gradientNumber === 8) {
            loopUp = false;
            gradientNumber -= 1;
            currentColour = colourGradient[gradientNumber];
            e.target.style.background = currentColour;
          }
          console.log(gradientNumber);
          console.log(loopUp);
        } else if (shaderButtonPressed) {
          const currentBackground = e.target.style.background;
          switch (currentBackground) {
            case "rgb(0, 0, 0)":
              console.log("1");
              currentColour = "rgb(0, 0, 0)";
              break;
            case "rgba(0, 0, 0, 0.1)":
              console.log("2");
              currentColour = "rgba(0, 0, 0, 0.2)";
              break;
            case "rgba(0, 0, 0, 0.2)":
              console.log("3");
              currentColour = "rgba(0, 0, 0, 0.3)";
              break;
            case "rgba(0, 0, 0, 0.3)":
              console.log("4");
              currentColour = "rgba(0, 0, 0, 0.4)";
              break;
            case "rgba(0, 0, 0, 0.4)":
              console.log("5");
              currentColour = "rgba(0, 0, 0, 0.5)";
              break;
            case "rgba(0, 0, 0, 0.5)":
              console.log("6");
              currentColour = "rgba(0, 0, 0, 0.6)";
              break;
            case "rgba(0, 0, 0, 0.6)":
              console.log("7");
              currentColour = "rgba(0, 0, 0, 0.7)";
              break;
            case "rgba(0, 0, 0, 0.7)":
              console.log("8");
              currentColour = "rgba(0, 0, 0, 0.8)";
              break;
            case "rgba(0, 0, 0, 0.8)":
              console.log("9");
              currentColour = "rgba(0, 0, 0, 0.9)";
              break;
            case "rgba(0, 0, 0, 0.9)":
              console.log("10");
              currentColour = "rgb(0, 0, 0)";
              break;
            case "rgb(0, 0, 0)":
              console.log("11");
              currentColour = "rgb(0, 0, 0)";
              break;
            default:
              console.log("12");
              currentColour = "rgba(0, 0, 0, 0.1)";
              break;
          }
          e.target.style.background = currentColour;
          console.log(e.target.style.background);
        } else if (eraserButtonPressed) {
          currentColour = "rgba(0,0,0,0)";
          e.target.style.background = currentColour;
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
