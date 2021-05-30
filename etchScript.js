//Query Selecting
const skContainer = document.querySelector('#sketch-grid-container');
const cellDiv = document.createElement('div');

//cellDiv styling
cellDiv.style.border = '1px solid';
cellDiv.style.borderColor = 'black';
cellDiv.classList.add('cellDivClass');

//Reset button functionality
const resizeBtn = document.querySelector('#resize-btn');
resizeBtn.addEventListener('click', () => {
    let sizeInput;
    do {
        sizeInput = prompt("Enter a number between 1 and 100 for grid dimensions i.e. Enter 32 for a 32x32 grid");
        if (sizeInput <= 100){
            genGrid(sizeInput);
        }
    } while (sizeInput > 100 && sizeInput);
});

//Clear button 
const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', eraseAll);

function eraseAll() {
    let gridCells = skContainer.querySelectorAll('div');
    gridCells.forEach(gridCell => gridCell.style.backgroundColor = "#FFFFFF");
}


//Variables for calculating total grid area - used for calculating individual cell size
let skContWidth = document.getElementById('sketch-grid-container').clientWidth;
let skContHeight = document.getElementById('sketch-grid-container').clientHeight;
let totalArea = Number(skContWidth) * Number(skContHeight);

//Generate Initial Grid
let size = 16 * 16;
let cellW = Math.sqrt(totalArea/size);
let cellH = Math.sqrt(totalArea/size);
let cellDivCopy = cellDiv.cloneNode(true);

//Check if mouse is down
let isDrawing = false;

//Set cell dimensions
cellDiv.style.width = `${cellW - 2}px`;
cellDiv.style.height = `${cellH - 2}px`;

for (i = 0; i < size; i++){
    cellDivCopy = cellDiv.cloneNode(true);
    cellDivCopy.addEventListener('mousedown', (e) => {
        //e.target.style.backgroundColor = 'purple';
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        isDrawing = true;
    });    
    cellDivCopy.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    cellDivCopy.addEventListener('mouseenter', (e) => {
        if (isDrawing === true) {
            //e.target.style.backgroundColor = 'purple';
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        }
    })  
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
        
        cellDivCopy.addEventListener('mousedown', (e) => {
            //e.target.style.backgroundColor = 'purple';
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
            isDrawing = true;
        });    
        cellDivCopy.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        cellDivCopy.addEventListener('mouseenter', (e) => {
            if (isDrawing === true) {
                //e.target.style.backgroundColor = 'purple';
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
            }
        })


        skContainer.appendChild(cellDivCopy);
    }

}

function genRandomRgb(max){
    Math.floor(Math.random() * max);
}



//Green Button
const gBtn = document.querySelector('#green-btn');
gBtn.addEventListener('click', () => {

});
//Red Button

function drawGreen(e){
    e.target.style.backgroundColor = 'green';
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