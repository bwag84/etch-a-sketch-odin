function createBoxes(num) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing boxes
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}

function promptUserForGridSize() {
    let gridSize;
    do {
        gridSize = prompt("Enter the number of boxes per side (maximum 100):");
        if (gridSize === null) return; // User cancelled
        gridSize = parseInt(gridSize);
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert("Please try again with a valid integer between 1 and 100.");
        }
    } while (isNaN(gridSize) || gridSize < 1 || gridSize > 100);
    createBoxes(gridSize);
}

document.getElementById('resizeBtn').addEventListener('click', promptUserForGridSize);

// Initial 16x16 grid
createBoxes(16);