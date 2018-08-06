//Constants and Variables
const container = document.querySelector('.container');
const gridArea = document.getElementById('grid');

function createGrid(cell) {
  for (r = 0; r < cell; r++) {
     for (c = 0; c < cell; c++) {
            let gridCell = document.createElement('div'); 
            let cellSize = (600 / cell) + "px";
            gridCell.className = "grid-cell";
            gridCell.style.width = cellSize;
            gridCell.style.height = cellSize;
            gridCell.addEventListener('mouseover', drawPixelsOnGrid);
            gridArea.appendChild(gridCell);
        }
  }
    return gridArea;
}

window.onload = createGrid(16);

function drawPixelsOnGrid(e){
    let color = "#008080";
    e.target.style.backgroundColor = color; 
}

function userPrompt(){
    let userInput = prompt('What do you want your square grid\'s dimension to be?');
    return userInput;
}

let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', resetGrid);

function resetGrid(){
    while (gridArea.firstChild){
        gridArea.removeChild(gridArea.firstChild);
  }
     createGrid(userPrompt());
}




