function createBoxes(num) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing boxes

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.flex = `1 0 calc(100% / ${num} - 2px)`;
        div.style.paddingTop = `calc(100% / ${num} - 2px)`;
        div.style.backgroundColor = getRandomColor();
        div.dataset.darkness = 0; // Initialize darkness level
        div.addEventListener('mouseover', darkenBox);
        fragment.appendChild(div);
    }
    container.appendChild(fragment);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function darkenBox(event) {
    const box = event.target;
    let darkness = parseInt(box.dataset.darkness);
    if (darkness < 10) {
        darkness += 1;
        box.dataset.darkness = darkness;
        box.style.filter = `brightness(${100 - darkness * 10}%)`;
    }
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