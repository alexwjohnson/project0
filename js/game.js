
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
let currentPlayer = "X";  
$('span.display-players-turn').html(currentPlayer);
const $tiles = $('div.tile');                                       // jQuery to get all tiles

const changePlayer = function () {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    $('span.display-players-turn').html(currentPlayer);
}

const gameResult = function (result) { 
    $('.game-result').html(result);
}

const gameReset = function () {
    currentBoard = ['','','','','','','','',''];
    currentPlayer = "X";
     $('span.display-players-turn').html(currentPlayer);
     $('.game-result').empty();
  $tiles.each(function() {
       $(this).html('');
    });
}

const findWinner = function () {
    console.log('Looking for a winner...');

        //test for winners here ..... 


    let result = `It's a Draw!`;
    gameResult(result);
}

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
    findWinner();
}
$('.tile').on('click', takeTurn);               //event listener for a tile choice 
$('#reset').on('click',gameReset);              //event listener for the reset button