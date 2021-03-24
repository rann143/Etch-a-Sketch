const skContainer = document.querySelector('#sketch-grid-container');
const cellDiv = document.createElement('div');
cellDiv.classList.add('cellDivClass');


function genGrid(n){
    let size = n * n;

    for (i = 0; i < size; i++){
        let cellDivCopy = cellDiv.cloneNode(true);
        skContainer.appendChild(cellDivCopy);
    }
}