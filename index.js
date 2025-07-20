/*
*   Automattically sets the dimensions of a matrix B to match matrix A.
*/
export function autoSetDimensions(){
    const rows = parseInt(document.getElementById('a-rows').value);
    const cols = parseInt(document.getElementById('a-cols').value);

    document.getElementById('b-rows').value = rows;
    document.getElementById('b-cols').value = cols;
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
    const rows = parseInt(document.getElementById('a-rows').value);
    const cols = parseInt(document.getElementById('a-cols').value);
    const matrixContainer = document.getElementById('matrix_entries');
    matrixContainer.innerHTML = ''; // Clears previous matrix entries/grids

    const A = createGrid(rows, cols, 'A');
    const B = createGrid(rows, cols, 'B');

    matrixContainer.appendChild(document.createElement('h3')).innerText = `Matrix A: ${rows}x${cols}`;

    matrixContainer.appendChild(A);

    matrixContainer.appendChild(document.createElement('h3')).innerText = `Matrix B: ${rows}x${cols}`;

    matrixContainer.appendChild(B);

    document.getElementById('result').innerHTML = ''; // Clears previous result matrix

}