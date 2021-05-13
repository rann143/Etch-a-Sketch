const skContainer = document.querySelector('#sketch-grid-container');
const cellDiv = document.createElement('div');
//cellDiv.style.backgroundColor = 'rgb(175,100,100)';
cellDiv.style.border = '1px solid';
cellDiv.style.borderColor = 'black';
//cellDiv.classList.add('cellDivClass');

skContWidth = document.getElementById('sketch-grid-container').clientWidth;
skContHeight = document.getElementById('sketch-grid-container').clientHeight;


let totalArea = Number(skContWidth) * Number(skContHeight);

//console.log(totalArea);

//Generate Initial Grid
let size = 16 * 16;
let cellW = Math.sqrt(totalArea/size);
let cellH = Math.sqrt(totalArea/size);
let cellDivCopy = cellDiv.cloneNode(true);

cellDiv.style.width = `${cellW - 2}px`;
cellDiv.style.height = `${cellH - 2}px`;

for (i = 0; i < size; i++){
    cellDivCopy = cellDiv.cloneNode(true);
    skContainer.appendChild(cellDivCopy);
}

//console.log(cellDiv.style.width);
console.log(skContainer.children);

function genGrid(n){
    removeAllChildren(skContainer);
    size = n * n;
    let cellW2 = Math.sqrt(totalArea/size);
    let cellH2 = Math.sqrt(totalArea/size);

    //console.log(cellW2);

    cellDiv.style.width = `${cellW2 - 2}px`;
    cellDiv.style.height = `${cellH2 - 2}px`;

    //console.log(cellDiv.style.width);

    for (i = 0; i < size; i++){
        let cellDivCopy2 = cellDiv.cloneNode(true);
        skContainer.appendChild(cellDivCopy2);
    }
}

//Trying to recreate removeAllChildren function with for loop
function clearGrid() {
    for (i = 0; i < size; i++){
        skContainer.removeChild(skContainer.firstChild);
    }
}

function removeAllChildren(parent){
    
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}