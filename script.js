const container = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const colorPicker = document.getElementById("color-picker");
let currentColor = colorPicker.value;

function createGrid(size) {
    container.innerHTML = "";
    container.style.setProperty("--grid-size", size);


    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        let interactions = 0;
      

        gridItem.addEventListener("mouseenter", () => {
            interactions++;
            const intensity = (interactions / 10) * 100;
            const newColor = darkenColor(currentColor, intensity);
            gridItem.style.backgroundColor = newColor;
        });

        container.appendChild(gridItem);
    }
}

function darkenColor(hex, percent) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const factor = 1 - percent / 100;

    const newR = Math.floor(r * factor);
    const newG = Math.floor(g * factor);
    const newB = Math.floor(b * factor);

    return `rgb(${newR}, ${newG}, ${newB})`;
}

function resetGrid() {
    const newSize = prompt("Enter the number of squares per side (max 100):");
    if (newSize && newSize > 0 && newSize <= 100) {
        currentColor = "#FDDA0D";
        colorPicker.value = currentColor;
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

resetButton.addEventListener("click", resetGrid);
colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
});

createGrid(16);