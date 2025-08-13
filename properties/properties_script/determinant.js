import {showMatrices, autoSetDimensionsNN} from '../../index.js';

document.addEventListener ('DOMContentLoaded', () => {
    const setButton = document.getElementById('set_button');
    const calcButton = document.getElementById('calculate_button');
    const rowInput = document.getElementById('rows');
    const colInput = document.getElementById('cols');


    setButton.addEventListener('click', () => showMatrices(false));
    calcButton.addEventListener('click', calculateDeterminant);

    rowInput.addEventListener('change', autoSetDimensionsNN);
});



function calculateDeterminant(){
    
    let matrix = [];
    let det = 0;

    const n = parseInt(document.getElementById('rows').value);
    for (let i = 0; i<n; i++){
        matrix[i] = [];
        for (let j=0; j<n; j++){
            const currCell = document.getElementById(`A_${i}_${j}`);
            matrix[i][j] = parseFloat(currCell.value) || 0;
        }
    }

    for (let i = 0; i<n; i++){
        for (let j = 0; j<n; j++){
            det += matrix[i][j];
        }
    }

    document.getElementById('result').innerHTML = '';
    
    document.getElementById('result').appendChild(document.createElement('h2')).innerText = `Determinant = ${det.toFixed(2)}`;
    
}

function createSubmatrix(matrix, removedRow, dim){
    let submatrix = [];
    const n = dim - 1;

    
}
