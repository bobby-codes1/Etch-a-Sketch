//create divs for grids
/*
const firstDiv = document.createElement('div');
//console.log(firstDiv);
const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
const fourthDiv = document.createElement('div');
const divOne = document.createElement('div');
const divTwo = document.createElement('div');
const divThree = document.createElement('div');
const divFour = document.createElement('div');
const divFive = document.createElement('div');
const divSix = document.createElement('div');
const divSeven = document.createElement('div');
const divEight = document.createElement('div');
const divNine = document.createElement('div');
const divTen = document.createElement('div');
const divEleven = document.createElement('div');
const divTwelve = document.createElement('div');
const divThirteen = document.createElement('div');
const divFourteen = document.createElement('div');
const divFifteen = document.createElement('div');
const divSixteen = document.createElement('div');*/
const gridSelector = document.querySelector('#container');
const gridColumn = document.querySelector('rowContainer');




//create grid with function
function makeGrid(rows, columns){
    const gridColumn = document.querySelector('rowContainer');
    //gridSelector.style.setProperty('grid-rows',rows);
    //gridSelector.style.setProperty('grid-columns',columns);
    //increase row count by 1 to create rows first
    columns++;
    
    let rowCheck = 0;
    let columnCheck = 0;
    let count = 1;
    let cellCount = 0;
    //let rowArray = [];
    let rowCount = 1;
    
    //for loop to create grid based on columns and rows
    for (i=1; i < (rows * columns)+1; i++){
        let rowNumber = 'row0'+i;
        let rowName = 'row'+i;
        let cellNummber = 'cell0'+cellCount;
        let cellName = 'cell'+cellCount;
        
        //console.log(rowNumber);
        

        //check for number of rows and fill first
        if(rowCheck < rows){
            //rowArray.push(rowNumber);
            rowNumber = document.createElement('div');
            //console.log(rowNumber);
            rowNumber.setAttribute('id', rowName);
            //console.log(gridSelector);
            gridSelector.appendChild(rowNumber).className = 'rowContainer';
            rowCheck++;
        }

        else{
            //create grid items with the remainder of the iterations
            count=count%(columns);
            
            if(count == 0){
                count = 1;
                rowCount++;
            }
            //console.log(document.getElementById('row1'));
            rowName = 'row'+rowCount;
            grid = document.getElementById(rowName);
            cellNummber = document.createElement('div');
            cellNummber.setAttribute('id', cellName);
            cellNummber.setAttribute('class','subDiv2');
            //cellNummber.style.width = '25svw';
            //console.log(grid);
            //console.log(cellNummber);

            
                
            //gridColumn was not declared in the document it was only declared in the CSS therefore it doesn't exist, we need to first create 
            //another div for the cells
            //console.log(grid);
            grid.appendChild(cellNummber).className = 'subDiv'+count;


            cellNummber.style.width = (100/rows)+'svw';
            cellNummber.style.height = (100/(rows))+'svh';
            //console.log(grid);
            cellNummber.addEventListener('mouseover', () =>{
                //change the div's background colour
                cellNummber.style.backgroundColor = 'blue';
            });
            
            cellNummber.addEventListener('mouseout', () =>{
                //change the div's background colour
                cellNummber.style.backgroundColor = '';
            });

            cellCount++;
            count++;
        }

        //console.log(cellNummber);
    }
   
}


const gridButton = document.createElement('button');
gridButton.setAttribute('id', '1');
gridButton.setAttribute('class', 'buttonForGrid');
gridButton.textContent = 'create grid';
gridSelector.appendChild(gridButton);
console.log(typeof gridButton);

makeGrid(3,3);
let gridCount;
gridButton.addEventListener('click', () => {
    const rowElements = document.getElementsByClassName('container');
    //console.log(typeof 'container');
    gridCount = Number(prompt('How many squares do you want to create?'));
    //delete rowElements;
    //console.log(gridCount);
    makeGrid(gridCount,gridCount);

});




/*
//create class for divs
firstDiv.setAttribute('class','rowOne');
secondDiv.setAttribute('class','rowTwo');
thirdDiv.setAttribute('class','rowThree');
fourthDiv.setAttribute('class','rowFour');

//classes for cell divs
divOne.setAttribute('class','subDiv1');
divTwo.setAttribute('class','subDiv2');
divThree.setAttribute('class','subDiv3');
divFour.setAttribute('class','subDiv4');
divFive.setAttribute('class','subDiv4');
divSix.setAttribute('class','subDiv3');
divSeven.setAttribute('class','subDiv2');
divEight.setAttribute('class','subDiv1');
divNine.setAttribute('class','subDiv3');
divTen.setAttribute('class','subDiv2');
divEleven.setAttribute('class','subDiv1');
divTwelve.setAttribute('class','subDiv4');
divThirteen.setAttribute('class','subDiv2');
divFourteen.setAttribute('class','subDiv3');
divFifteen.setAttribute('class','subDiv4');
divSixteen.setAttribute('class','subDiv1');
//add divs to html
//rows 
gridSelector.appendChild(firstDiv);
gridSelector.appendChild(secondDiv);
gridSelector.appendChild(thirdDiv);
gridSelector.appendChild(fourthDiv);

//columns - column 
firstDiv.appendChild(divOne);
firstDiv.appendChild(divTwo);
firstDiv.appendChild(divThree);
firstDiv.appendChild(divFour);

secondDiv.appendChild(divFive);
secondDiv.appendChild(divSix);
secondDiv.appendChild(divSeven);
secondDiv.appendChild(divEight);


thirdDiv.appendChild(divNine);
thirdDiv.appendChild(divTen);
thirdDiv.appendChild(divEleven);
thirdDiv.appendChild(divTwelve);


fourthDiv.appendChild(divThirteen);
fourthDiv.appendChild(divFourteen);
fourthDiv.appendChild(divFifteen);
fourthDiv.appendChild(divSixteen);
*/
//setting up hover effects on divs
//div 1

/*
//div 2
divTwo.addEventListener('mouseover', () =>{
    //change the div's background colour
    divTwo.style.backgroundColor = 'blue';
});

divTwo.addEventListener('mouseout', () =>{
    //change the div's background colour
    divTwo.style.backgroundColor = '';
});

//div 3
divThree.addEventListener('mouseover', () =>{
    //change the div's background colour
    divThree.style.backgroundColor = 'blue';
});

divThree.addEventListener('mouseout', () =>{
    //change the div's background colour
    divThree.style.backgroundColor = '';
});

//div 4
divFour.addEventListener('mouseover', () =>{
    //change the div's background colour
    divFour.style.backgroundColor = 'blue';
});

divFour.addEventListener('mouseout', () =>{
    //change the div's background colour
    divFour.style.backgroundColor = '';
});

//div 5
divFive.addEventListener('mouseover', () =>{
    //change the div's background colour
    divFive.style.backgroundColor = 'blue';
});

divFive.addEventListener('mouseout', () =>{
    //change the div's background colour
    divFive.style.backgroundColor = '';
});

//div 6
divSix.addEventListener('mouseover', () =>{
    //change the div's background colour
    divSix.style.backgroundColor = 'blue';
});

divSix.addEventListener('mouseout', () =>{
    //change the div's background colour
    divSix.style.backgroundColor = '';
});

//div 7
divSeven.addEventListener('mouseover', () =>{
    //change the div's background colour
    divSeven.style.backgroundColor = 'blue';
});

divSeven.addEventListener('mouseout', () =>{
    //change the div's background colour
    divSeven.style.backgroundColor = '';
});

//div 8
divEight.addEventListener('mouseover', () =>{
    //change the div's background colour
    divEight.style.backgroundColor = 'blue';
});

divEight.addEventListener('mouseout', () =>{
    //change the div's background colour
    divEight.style.backgroundColor = '';
});

//div 9
divNine.addEventListener('mouseover', () =>{
    //change the div's background colour
    divNine.style.backgroundColor = 'blue';
});

divNine.addEventListener('mouseout', () =>{
    //change the div's background colour
    divNine.style.backgroundColor = '';
});

//div 10
divTen.addEventListener('mouseover', () =>{
    //change the div's background colour
    divTen.style.backgroundColor = 'blue';
});

divTen.addEventListener('mouseout', () =>{
    //change the div's background colour
    divTen.style.backgroundColor = '';
});

//div 11
divEleven.addEventListener('mouseover', () =>{
    //change the div's background colour
    divEleven.style.backgroundColor = 'blue';
});

divEleven.addEventListener('mouseout', () =>{
    //change the div's background colour
    divEleven.style.backgroundColor = '';
});

//div 12
divTwelve.addEventListener('mouseover', () =>{
    //change the div's background colour
    divTwelve.style.backgroundColor = 'blue';
});

divTwelve.addEventListener('mouseout', () =>{
    //change the div's background colour
    divTwelve.style.backgroundColor = '';
});

//div 13
divThirteen.addEventListener('mouseover', () =>{
    //change the div's background colour
    divThirteen.style.backgroundColor = 'blue';
});

divThirteen.addEventListener('mouseout', () =>{
    //change the div's background colour
    divThirteen.style.backgroundColor = '';
});

//div 14
divFourteen.addEventListener('mouseover', () =>{
    //change the div's background colour
    divFourteen.style.backgroundColor = 'blue';
});

divFourteen.addEventListener('mouseout', () =>{
    //change the div's background colour
    divFourteen.style.backgroundColor = '';
});

//div 15
divFifteen.addEventListener('mouseover', () =>{
    //change the div's background colour
    divFifteen.style.backgroundColor = 'blue';
});

divFifteen.addEventListener('mouseout', () =>{
    //change the div's background colour
    divFifteen.style.backgroundColor = '';
});

//div 16
divSixteen.addEventListener('mouseover', () =>{
    //change the div's background colour
    divSixteen.style.backgroundColor = 'blue';
});

divSixteen.addEventListener('mouseout', () =>{
    //change the div's background colour
    divSixteen.style.backgroundColor = '';
});
*/



//creating the pixelated trail
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };

// The Dot object used to scaffold the dots
var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};
// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 20; i++) {
 var d = new Dot();
 dots.push(d);
}

// This is the screen redraw function
function draw() {
 // Make sure the mouse position is set everytime
   // draw() is called.
 var x = mouse.x,
     y = mouse.y;
 
 // This loop is where all the 90s magic happens
 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .6;
   y += (nextDot.y - dot.y) * .6;

 });
}

addEventListener("mousemove", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().
function animate() {
 draw();
 requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();

/*

var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false;

var x = "black",
y = 2;

function init() {
canvas = document.getElementById('can');
ctx = canvas.getContext("2d");
w = canvas.width;
h = canvas.height;

canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
}, false);
canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
}, false);
canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
}, false);
canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
}, false);
}

function color(obj) {
switch (obj.id) {
    case "green":
        x = "green";
        break;
    case "blue":
        x = "blue";
        break;
    case "red":
        x = "red";
        break;
    case "yellow":
        x = "yellow";
        break;
    case "orange":
        x = "orange";
        break;
    case "black":
        x = "black";
        break;
    case "white":
        x = "white";
        break;
}
if (x == "white") y = 14;
else y = 2;

}

function draw() {
ctx.beginPath();
ctx.moveTo(prevX, prevY);
ctx.lineTo(currX, currY);
ctx.strokeStyle = x;
ctx.lineWidth = y;
ctx.stroke();
ctx.closePath();
}

function erase() {
var m = confirm("Want to clear");
if (m) {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
}
}

function save() {
document.getElementById("canvasimg").style.border = "2px solid";
var dataURL = canvas.toDataURL();
document.getElementById("canvasimg").src = dataURL;
document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
    }
}
if (res == 'up' || res == "out") {
    flag = false;
}
if (res == 'move') {
    if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
    }
}
}
*/

