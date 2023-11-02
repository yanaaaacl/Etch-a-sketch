let textNumbers = document.querySelector('.numbers');
let rangeNumbers = document.querySelector('#numbers__range');

let squareGrid = document.querySelector('.square');

let doubleValue = rangeNumbers.value * rangeNumbers.value;
let smallSquare = document.createElement('div');
smallSquare.className
for (let i = 0; i <= doubleValue; i++){
    let 
}


function changeNumbers(){
    textNumbers.textContent = rangeNumbers.value + 'X' + rangeNumbers.value;
    squareGrid.style.gridTemplateColumns = `repeat(${rangeNumbers.value}, 1fr)`;
    squareGrid.style.gridTemplateRows = `repeat(${rangeNumbers.value}, 1fr)`;
}



rangeNumbers.addEventListener('mousemove', changeNumbers);


changeNumbers();
