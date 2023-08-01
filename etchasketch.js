const container = document.querySelector("#container");
const gridSizeButton = document.querySelector("#gridSizeButton");

//gridSizeButton.addEventListener("click", changeGridSize);

makeGrid(30);

function makeGrid(x) {
  for (let columns = 0; columns < x; columns++) {
    for (let rows = 0; rows < x; rows++) {
      const box = document.createElement("div");
      box.classList.add("sketch-divs");
      box.setAttribute('style', 'aspect-ratio: 1/1; width: auto; height auto;');
      container.appendChild(box);
      box.addEventListener("mouseenter", function (e) {
        e.target.style.background = "pink";
      });
    }
  }
}
