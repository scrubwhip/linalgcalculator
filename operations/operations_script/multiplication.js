import {showMatrices, autoSetDimensionsMult} from '../../index.js';

/*
*   Establishes initial instructions for when document is loaded and parsed.
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log('Addition document loaded and parsed')
    const SetButton = document.getElementById('set_button');    // Variable for the "Set Matrices" button on addition page
    const CalcButtonAddition = document.getElementById('calculate_button_addition');    // Variable for the "Calculate" button on addition page

    const colInput = document.getElementById('a-cols');

    // Adds event listeners to button variables that control what function is called upon each button click
    SetButton.addEventListener('click', showMatrices);
    CalcButtonAddition.addEventListener('click', calculateMultiplication);

    colInput.addEventListener('change', autoSetDimensionsMult);
});

function calculateMultiplication(){
    document.getElementById('result').innerHTML = '';

    const aRows = parseInt(document.getElementById('a-rows').value);
    const aCols = parseInt(document.getElementById('a-cols').value);
    const bRows = parseInt(document.getElementById('b-rows').value);
    const bCols = parseInt(document.getElementById('b-cols').value);

    const resultContainer = document.getElementById('result');

    resultContainer.appendChild(document.createElement('h3')).innerText = `Result: ${aRows}x${bCols}`;

    const resultGrid = document.createElement('div');
    resultGrid.className = 'matrix';
    resultGrid.style.gridTemplateColumns = `repeat(${bCols}, 1fr)`;

    for(let i = 0; i<aRows; i++){
        for(let j=0; j<bCols; j++){
            let resultVal = 0;

            for(let k = 0; k<aCols; k++){
                const aValue = parseFloat(document.getElementById(`A_${i}_${k}`).value) || 0;
                const bValue = parseFloat(document.getElementById(`B_${k}_${j}`).value) || 0;
                
                resultVal += (aValue * bValue)
            }
            
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