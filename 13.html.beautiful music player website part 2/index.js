const resultsDisplay = document.querySelector(".results");
//why there is a  . in the queryselector  where i have used class=grid in the html?
//In the line const grid = document.querySelector('.grid'), the dot (.) in the querySelector method indicates that you are selecting an element by its class name.
//so if we have used #grid in there what would have that meant?
//If you used #grid instead of .grid in document.querySelector('#grid'), it would indicate that you are selecting an element by its ID rather than its class name.

const grid = document.querySelector(".grid");
// querySelector returns first element that matches as an object .
// getElementsByClassName returns an HTMLCollection, which is an array-like object


// the height and the width of the '.grid' has been specified in the css file 
// the origin of 225. 
for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}
// appendchild doesnot eorks on the html collection but it works on the element node 
// and that's exactly why we needed queryselector rather than getelementbyclassname.
//////////////////////////////////////////////////////////////////////
const squares = Array.from(document.querySelectorAll(".grid div"));
// creating reference for the square elements to iterate and draw the invaders .
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];
let aliensRemoved = [];

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add("invader");
    }
  }
}
// alienInvaders[i] --> this retrives the element from the i index of the 'alieninvaders array' 
// and
// squares[alienInvaders[i]] -->indicates accessing an element from the squares array using the value obtained from alienInvaders[i] as the index.

draw();


//////////////////////////////////////////////////////////////////


































