let textNumbers = document.querySelector('.numbers');
let rangeNumbers = document.querySelector('#numbers__range');

let squareGrid = document.querySelector('.square');







function changeNumbers() {
    textNumbers.textContent = rangeNumbers.value + 'X' + rangeNumbers.value;
    squareGrid.style.gridTemplateColumns = `repeat(${rangeNumbers.value}, 1fr)`;
    squareGrid.style.gridTemplateRows = `repeat(${rangeNumbers.value}, 1fr)`;
    for (let i = 0; i < rangeNumbers.value * rangeNumbers.value; i++) {
        let smallSquare = document.createElement('div');
        smallSquare.classList.add('small');
        smallSquare.addEventListener('click', function colort(){
            smallSquare.style.backgroundColor = 'black';
        });
        
        squareGrid.appendChild(smallSquare);
        
    }
}


rangeNumbers.addEventListener('mousemove', changeNumbers);


changeNumbers();
