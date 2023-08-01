const container = document.querySelector("#container");

for (let columns = 0; columns < 16; columns++) {
  makeRow(16);
}

function makeRow(x) {
  for (let rows = 0; rows < x; rows++) {
    const row = document.createElement("div");
    row.classList.add("sketch-divs");
    container.appendChild(row);
  }
}
