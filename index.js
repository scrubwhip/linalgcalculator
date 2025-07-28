/*
*   Automattically sets the dimensions of a matrix B to match matrix A.
*/
export function autoSetDimensions(){
    const rows = parseInt(document.getElementById('a-rows').value);
    const cols = parseInt(document.getElementById('a-cols').value);

    document.getElementById('b-rows').value = rows;
    document.getElementById('b-cols').value = cols;
}

export function autoSetDimensionsMult(){
    const cols = parseInt(document.getElementById('a-cols').value);

    document.getElementById('b-rows').value = cols;
}

/*
*   Creates a grid for user entries to represent a matrix.
*/
export function createGrid(rows, cols, idPrefix) {
    /*
    *   <div class="matrix">
    */
    const grid = document.createElement('div');
    grid.className = 'matrix';

    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            /*
            *   <input type="number" class="cell" id="A_i_j">
            */
            const inputCell = document.createElement('input');
            inputCell.type = 'number';
            inputCell.className = 'cell';
            inputCell.id = `${idPrefix}_${i}_${j}`;

            grid.appendChild(inputCell);
        }
        grid.appendChild(document.createElement('br'));
    }

    return grid;
}

/*
*   Displays a grid of input cells for two matrices based on user-defined dimensions.
*/

export function showMatrices(){
    const aRows = parseInt(document.getElementById('a-rows').value);
    const aCols = parseInt(document.getElementById('a-cols').value);
    const bRows = parseInt(document.getElementById('b-rows').value);
    const bCols = parseInt(document.getElementById('b-cols').value);
    const matrixContainer = document.getElementById('matrix_entries');
    matrixContainer.innerHTML = ''; // Clears previous matrix entries/grids

    const A = createGrid(aRows, aCols, 'A');
    const B = createGrid(bRows, bCols, 'B');

    matrixContainer.appendChild(document.createElement('h3')).innerText = `Matrix A: ${aRows}x${aCols}`;

    matrixContainer.appendChild(A);

    matrixContainer.appendChild(document.createElement('h3')).innerText = `Matrix B: ${bRows}x${bCols}`;

    matrixContainer.appendChild(B);

    document.getElementById('calculate_button').style.display = 'block';

    document.getElementById('result').innerHTML = ''; // Clears previous result matrix

}