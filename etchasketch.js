const container = document.querySelector("#container");
const gridSizeButton = document.querySelector("#gridSizeButton");

gridSizeButton.addEventListener("click", function () {
  let gridSize = prompt("What size would you like the grid?", "16");
  makeGrid(gridSize);
});

//makeGrid(100);

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
