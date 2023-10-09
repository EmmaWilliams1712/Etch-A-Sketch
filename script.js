const container = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");

function createGrid(size) {
    container.innerHTML = "";
    container.style.setProperty("--grid-size", size);


    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
      

        gridItem.addEventListener("mouseenter", () => {
            gridItem.style.backgroundColor = "black";
        });

        container.appendChild(gridItem);
    }
}

function resetGrid() {
    const newSize = prompt("Enter the number of squares per side (max 100):");
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

resetButton.addEventListener("click", resetGrid);

createGrid(16);