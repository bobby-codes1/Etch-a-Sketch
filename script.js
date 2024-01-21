//create divs for grids
const firstDiv = document.createElement('div');
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
const divSixteen = document.createElement('div');
const gridSelector = document.querySelector('#container');


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

//setting up hover effects on divs
//div 1
divOne.addEventListener('mouseover', () =>{
    //change the div's background colour
    divOne.style.backgroundColor = 'blue';
});

divOne.addEventListener('mouseout', () =>{
    //change the div's background colour
    divOne.style.backgroundColor = '';
});

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




