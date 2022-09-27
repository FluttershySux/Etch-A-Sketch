const DEFAULT_SIZE = 16;
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const penColour = document.querySelector(".pen-colour");
const resetButton = document.querySelector('.reset');
const gridChildren = document.querySelector('.grid').childNodes;
const toggleGrid = document.querySelector('.grid-lines-toggle');
const backgroundColor = document.querySelector('.background-colour');
let grid = document.querySelector('.grid');
let brush = 1;

window.onload = () => {
    createGrid(DEFAULT_SIZE);
};

/*****Grid creation*****/
function createGrid(size) {
    if (size > 100 || size <= 0) {
        return alert("Pick a number between 1 and 100");
    };

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', changeColour);
        gridElement.classList.add('grid-lines');
        grid.appendChild(gridElement);
    };
};

/*****Remove grid*****/
function removeGrid(size) {
    if (size > 100 || size <= 0) {
        return;
    };

    let grid = document.querySelector('.grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    };
};

/*****Reset button*****/
resetButton.addEventListener('click', function () {
    gridChildren.forEach(function (item) {
        item.style.backgroundColor = 'white';
    });
    const gridSize = prompt("Choose a new grid size up to 100 squares");
    removeGrid(gridSize);
    createGrid(gridSize);
});

/*****Brush variable declaration*****/
penColour.addEventListener('click', function () {
    brush = 2;
});
rainbow.addEventListener('click', function () {
    brush = 3;
});
eraser.addEventListener('click', function () {
    brush = 4;
});


/*****Change brush mode*****/
function changeColour(e) {
    if (brush == 1) {
        e.target.style.backgroundColor = 'black';
    };
    if (brush == 2) {
        e.target.style.backgroundColor = penColour.value;
    };
    if (brush == 3) {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColour = '#';
        for (i = 0; i < 6; i++) {
            hexColour += hex[Math.floor(Math.random() * hex.length)];
        };
        e.target.style.backgroundColor = hexColour;
    };
    if (brush == 4) {
        e.target.style.backgroundColor = grid.style.color;
    };
};

/*****Toggle grid*****/
toggleGrid.addEventListener('click', function () {
    const gridBorder = document.querySelectorAll('.grid-lines');
    gridBorder.forEach(function (item) {
        item.classList.toggle('no-grid-lines');
    });
});

/*****Background colour*****/
backgroundColor.addEventListener('input', function () {
    grid.style.backgroundColor = backgroundColor.value;
});








