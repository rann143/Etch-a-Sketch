//Query Selecting
const skContainer = document.querySelector('#sketch-grid-container');
const cellDiv = document.createElement('div');

//cellDiv styling
cellDiv.style.border = '1px solid';
cellDiv.style.borderColor = 'black';
cellDiv.classList.add('cellDivClass');

//clear (reset) button functionality
const btn = document.querySelector('#clear-btn');
btn.addEventListener('click', () => {
    let sizeInput;
    do {
        sizeInput = prompt("Enter a number between 1 and 100 for grid dimensions i.e. Enter 32 for a 32x32 grid");
        if (sizeInput <= 100){
            genGrid(sizeInput);
        }
    } while (sizeInput > 100 && sizeInput);
});

//Variables for calculating individual cell size
let skContWidth = document.getElementById('sketch-grid-container').clientWidth;
let skContHeight = document.getElementById('sketch-grid-container').clientHeight;
let totalArea = Number(skContWidth) * Number(skContHeight);

//Generate Initial Grid
let size = 16 * 16;
let cellW = Math.sqrt(totalArea/size);
let cellH = Math.sqrt(totalArea/size);
let cellDivCopy = cellDiv.cloneNode(true);

cellDiv.style.width = `${cellW - 2}px`;
cellDiv.style.height = `${cellH - 2}px`;

for (i = 0; i < size; i++){
    cellDivCopy = cellDiv.cloneNode(true);
    cellDivCopy.addEventListener('mouseenter', (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = 'purple';
    });    
    skContainer.appendChild(cellDivCopy);
}


//function for generating new grids
function genGrid(n){
    removeAllChildren(skContainer);
    size = n * n;
    let cellW2 = Math.sqrt(totalArea/size);
    let cellH2 = Math.sqrt(totalArea/size);

    cellDiv.style.width = `${cellW2 - 2}px`;
    cellDiv.style.height = `${cellH2 - 2}px`;

    for (i = 0; i < size; i++){
        cellDivCopy = cellDiv.cloneNode(true);
        cellDivCopy.addEventListener('mouseenter', (e) => {
            console.log(e.target);
            e.target.style.backgroundColor = 'purple';
        });    
        skContainer.appendChild(cellDivCopy);
    }

}

//Trying to recreate removeAllChildren function with for loop
function clearGrid() {
    for (i = 0; i < size; i++){
        skContainer.removeChild(skContainer.firstChild);
    }
}

//used in clear (reset) button
function removeAllChildren(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}