//Just printing Hello World to make sure my website didn't blow up
console.log("Hello, World!");

//create flex squares to put into container
let cell = document.createElement("div");


// Making a grid and then inserting square elements

let mygrid = document.querySelector('.mygrid');

function makeGrid(gridSize) {
    mygrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    mygrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    x=1;
    for (let x=1; x<=gridSize; x++) {
        y = 1;
        for (let y=1; y<=gridSize; y++) {
            //console.log('y loopp',x,y);
            let cell = document.createElement("div");
            cell.classList.add('cell')
            
            mygrid.appendChild(cell);

        }
    }
}

//Fill in squares that are hovered over.
cell.addEventListener("mouseenter", function( event ) {   
    //event.target.style.backgroundColor = "purple";
    cell.classList.add('cellHover');
})

cell.addEventListener("mouseover", (event) => {});

onmouseover = (event) => {
    //console.log(event.target);
    if (event.target.classList.contains('cell')) {
    event.target.classList.add('cellHover');
    }
};

// Clear grid and make a new one (respecting max size)
/*
function resetPrompt() {
    newGridSize = Number(prompt("How many buttons do you want per side? (Max. 100)"));
    if (newGridSize > 100) {
        return alert("The maximum grid size is 100x100");
    }
    
    mynewgrid = makeGrid(newGridSize);
    
}
*/
makeGrid(33);
