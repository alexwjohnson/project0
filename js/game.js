
//need a load statement as the scripts are all in the head     TO DO
const winCombos = [                                                 // array of possible win combos
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
 let currentBoard = ['','','','','','','','',''];
//  const for X player winning
//  const for O player winning
//  const for a tie
let gameActive = true;
let currentPlayer = "X";  
$('span.display-players-turn').html(currentPlayer);
const $tiles = $('div.tile');                                       // jQuery to get all tiles

// change the current player .. and display 
const changePlayer = function () {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    $('span.display-players-turn').html(currentPlayer);
}

// helper func to announce result ? hide/display   //TO DO
// const jQuery to display our game result  - win/lose/draw 

//loop through winCombos with a completed row col or diag   //TO DO

const gameReset = function () {
    currentBoard = ['','','','','','','','',''];
    currentPlayer = "X";
     $('span.display-players-turn').html(currentPlayer);
  $tiles.each(function() {
       $(this).html('');
    });
}
$('#reset').on('click',gameReset);              //event listener for the reset button

//event listener for the tiles
const takeTurn = function() {
    let seltile = $tiles.index($(this));

    if (!currentBoard[seltile]) {
        currentBoard[seltile] = currentPlayer;
    } else {
        return;
    }
    $(this).html(currentPlayer);
    console.log(`the currentBoard array... ${ currentBoard }`)          //testing
    changePlayer();
    
}
$('.tile').on('click', takeTurn); 