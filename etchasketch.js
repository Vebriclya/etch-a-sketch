const container = document.querySelector("#container");
const dropdown = document.querySelector("#sizeDropdown");
const boxes = document.querySelectorAll(".sketch-divs");
const colourButton = document.querySelector("#colourfy");
const shaderButton = document.querySelector("#shade");

makeGrid(10);

dropdown.addEventListener("change", () => {
  container.innerHTML = "";
  makeGrid(dropdown.value);
});

colourButton.addEventListener("click", () => {
  console.log("Pressed!");
  randomColour();
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
        e.target.style.background = "pink";
      });
      box.style.zIndex = 0;
    }
  }
}

function randomColour() {
  boxes.forEach((box) => {
    box.removeEventListener("mouseenter", colourArray);
    box.addEventListener("mouseenter", applyRandomColor);
  });
}

function colourArray(e) {
  console.log("entered");
  for (let i = 0; i < 8; i++) {
    switch (i) {
      case 0:
        e.target.style.background = "#0d2b45";
        break;
      case 1:
        e.target.style.background = "#203c56";
        break;
      case 2:
        e.target.style.background = "#544e68";
        break;
      case 3:
        e.target.style.background = "#8d697a";
        break;
      case 4:
        e.target.style.background = "#d08159";
        break;
      case 5:
        e.target.style.background = "#ffaa5e";
        break;
      case 6:
        e.target.style.background = "#ffd4a3";
        break;
      case 7:
        e.target.style.background = "#ffecd6";
        break;
    }
  }
}
