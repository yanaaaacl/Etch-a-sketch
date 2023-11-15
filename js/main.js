let textNumbers = document.querySelector('.numbers');
let rangeNumbers = document.querySelector('#numbers__range');

let squareGrid = document.querySelector('.square');

let colorBtn = document.querySelector('#color__btn');
let colorMode = document.querySelector('.mode');
let rainbowMode = document.querySelector('.rainbow');
let eraserMode = document.querySelector('.eraser');
let clearMode = document.querySelector('.clear');
let groupsBtn = document.querySelectorAll('.color__btn-change');






function changeNumbers() {
    textNumbers.textContent = rangeNumbers.value + 'X' + rangeNumbers.value;
    squareGrid.style.gridTemplateColumns = `repeat(${rangeNumbers.value}, 1fr)`;
    squareGrid.style.gridTemplateRows = `repeat(${rangeNumbers.value}, 1fr)`;
    for (let i = 0; i < rangeNumbers.value * rangeNumbers.value; i++) {
        let smallSquare = document.createElement('div');
        smallSquare.classList.add('small');
        colorMode.addEventListener('click', function colorOneSquare() {
            smallSquare.addEventListener('mousedown', function colorts() {
                smallSquare.style.backgroundColor = colorBtn.value;
            });
            
        });
        rainbowMode.addEventListener('click', function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (let j = 0; j < 6; j++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            smallSquare.addEventListener('mousedown', function colortRainbow() {
           
                smallSquare.style.backgroundColor = color;
            });
        });
        
        
        eraserMode.addEventListener('click', function clearOneSquare() {
            smallSquare.addEventListener('mousedown', function colort() {
                smallSquare.style.backgroundColor = 'white';
            });
        });


        squareGrid.appendChild(smallSquare);

        rangeNumbers.addEventListener('mousedown', function moveValue() {
            smallSquare.style.backgroundColor = 'white';
        });
        clearMode.addEventListener('click', function clearWhite() {
            smallSquare.style.backgroundColor = 'white';
        });

    }


}




rangeNumbers.addEventListener('mousemove', changeNumbers);


changeNumbers();
