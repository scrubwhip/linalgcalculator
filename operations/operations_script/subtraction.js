import {showMatrices, autoSetDimensions} from '../../index.js';

/*
*   Establishes initial instructions for when document is loaded and parsed.
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('Subtraction document loaded and parsed')
    const SetButton = document.getElementById('set_button');
    const CalcButton = document.getElementById('calculate_button');

    const rowInput = document.getElementById('a-rows');
    const colInput = document.getElementById('a-cols');

    // Adds event listeners to button variables that control what function is called upon each button click
    SetButton.addEventListener('click', showMatrices);
    CalcButton.addEventListener('click', calculateSubtraction);

    rowInput.addEventListener('change', autoSetDimensions);
    colInput.addEventListener('change', autoSetDimensions);
});

function calculateSubtraction(){
    document.getElementById('result').innerHTML = '';

    const rows = parseInt(document.getElementById('a-rows').value);
    const cols = parseInt(document.getElementById('a-cols').value);

    const resultContainer = document.getElementById('result');

    resultContainer.appendChild(document.createElement('h3')).innerText = `Result: ${rows}x${cols}`;

    const resultGrid = document.createElement('div');
    resultGrid.className = 'matrix';
    resultGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for(let i = 0; i<rows; i++){
        for(let j = 0; j<cols; j++){
            const aVal = parseFloat(document.getElementById(`A_${i}_${j}`).value) || 0;
            const bVal = parseFloat(document.getElementById(`B_${i}_${j}`).value) || 0;

            const resultVal = aVal - bVal;
            
            const resultCell = document.createElement('input');
            resultCell.className = 'resultCell';
            resultCell.type = 'number';
            resultCell.readOnly = true;
            resultCell.value = resultVal.toFixed(2);;

            resultGrid.appendChild(resultCell);
        }
        resultGrid.appendChild(document.createElement('br'));
    }

    resultContainer.appendChild(resultGrid);

}