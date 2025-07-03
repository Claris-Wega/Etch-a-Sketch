const container = document.getElementById('container');
const gridSize = 16; // 16x16 grid

for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
}