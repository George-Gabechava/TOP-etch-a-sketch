console.log("Hello, World!");

//Create flex container
/*
const container = document.getElementById('container');
container.classList.add('container');
document.getElementById('container').style.flex = 1;
document.getElementById("container").style.height = "50px";
*/

//create flex squares to put into container
const cell = document.createElement("div");
/*
let square = document.getElementById('square');
square.classList.add('square');
square.style.cssText = 'background-color: pink; border: solid black';
document.getElementById('square').style.flex = 1;
document.getElementById("square").style.height = "10px";
*/

// Making a grid and then inserting square elements

let mygrid = document.querySelector('.mygrid');

function makeGrid(gridSize) {
    mygrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    mygrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let x=1; x<=gridSize; x++) {
        y = 1;
        for (let y=1; y<=gridSize; y++) {
            //console.log('y loopp',x,y);
            
            const cell = document.createElement("div");
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
function resetPrompt() {
    newGridsize = Number(prompt("How many buttons do you want per side? (Max. 100)"));
    if (newGridsize > 100) {
        return alert("The maximum grid size is 100x100");
    }
    mygrid.remove();
    mynewgrid = makeGrid(newGridsize);
    document.body.append(mynewgrid);
}

makeGrid(10);