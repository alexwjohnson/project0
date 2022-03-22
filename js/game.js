/*0 based index of the gameboard: 0-8 */
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//implement jQuery
//need a load statement as the scripts are all in the head
//event listeners for the tiles
//event listener for the reset button

//  const for X player winning
//  const for O player winning
//  const for a tie

// const for jQuery to get all .tile values 
// const for jQuery for .show-player ... tell the next person it's their turn 
// const jQuery to display our game result  - win/lose/draw 

// implement consts for: 
// the board for the current game ...starts as empty array b4 1st move and is populated as each move is completed
// game active bool 
// the current player .. 
// check for a valid move ...  
// render a valid move to the board and the current game array.... just use current game array as the source of truth? 
// helper func to annouce result ? hide/display 

//loop through winCombos with a completed row col or diag  