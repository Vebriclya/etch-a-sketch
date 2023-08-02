const container = document.querySelector("#container");
const dropdown = document.querySelector("#sizeDropdown");

//makeGrid(100);

dropdown.addEventListener("change", () => {
  container.innerHTML = "";
  makeGrid(dropdown.value);
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
