const container = document.querySelector("#container");
const gridSizeButton = document.querySelector("#gridSizeButton");

gridSizeButton.addEventListener("click", changeGridSize);

makeGrid(16);

function makeGrid(x) {
  for (let columns = 0; columns < x; columns++) {
    for (let rows = 0; rows < x; rows++) {
      const box = document.createElement("div");
      box.classList.add("sketch-divs");
      container.appendChild(box);
      box.addEventListener("mouseenter", function (e) {
        e.target.style.background = "pink";
      });
    }
  }
}
