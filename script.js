const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');
const containerSize = 640 // px

function creatGrid(gridSize) {
    container.innerHTML = ''; // Clear existing squares
    const squareSize = containerSize / gridSize; // Calculate size of each square
}

for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    // Hover effect
    square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
    });
    container.appendChild(square);
} 
//Button to set grid size
resizeBtn.addEventListener('click', () => {
    let newSize = prompt('Enter grid size (max 100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return
    }
    createGrid(newSize);
});
createGrid(16); // Initial grid size