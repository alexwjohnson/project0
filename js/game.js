
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
let freezeBoard = false; 
$('span.display-players-turn').html(currentPlayer);
const $tiles = $('div.tile');                                       // jQuery to get all tiles

const gameReset = function () {
    currentBoard = ['','','','','','','','',''];
    currentPlayer = "X"; 
    let $resetPlayerMsg = $('<h1 class="the-player">Player <span class="display-players-turn token-colorX"></span> : It\'s your go...<span class="blink">|</span></h1>');
    $('.show-player').empty();
    $('.show-player').append($resetPlayerMsg);
    $('span.display-players-turn').html(currentPlayer);
    $('.game-result').empty();
    $tiles.each(function() {
       $(this).html('');
    });
}

const changePlayer = function () {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    $('span.display-players-turn').html(currentPlayer);
}

const gameResult = function (result) { 
    // console.log(`result is .... ${ result }`);
    if (result) {
        console.log(`${ result }: freeze the board!`)
        freezeBoard = true;
        // $('.tile').prop('disabled', true);   //nbg 
        // defect ... keep playing after win 
    }
    $('.game-result').html(result);
            
}



const findWinner = function () {
    let message = 'Game Over!';
    let result;
    for (let i = 0; i < winCombos.length; i++) {
            let combo = winCombos[i];
        if (currentBoard[combo[0]] === 'X' && currentBoard[combo[1]] === 'X' 
            && currentBoard[combo[2]] === 'X') {
           result = 'X Wins!'
            $('.the-player').html(message);
        }
        if (currentBoard[combo[0]] === 'O' && currentBoard[combo[1]] === 'O' 
            && currentBoard[combo[2]] === 'O') {
            result = 'O Wins!'
            $('.the-player').html(message);
        }
    }
    let count = 0 
    for (let i = 0; i < currentBoard.length; i++) {
       if (currentBoard[i]) {
           count = count + 1;
       } 
    }
    if (count === 9) {
        result = 'Draw...';
        $('.the-player').html(message);
    }
    if (result) {
        gameResult(result);
    }
}

const takeTurn = function() {
    let seltile = $tiles.index($(this));
    if (!currentBoard[seltile]) {
        currentBoard[seltile] = currentPlayer;
    } else {
        return;
    }
    $(this).html(currentPlayer);
    changePlayer();
    findWinner();
}
// console.log(freezeBoard);
// if (!freezeBoard) { 
 $('.tile').on('click', takeTurn);               //event listener for a tile choice
// } else {
// $('.tile').prop('disabled', true);
// }              
$('#reset').on('click',gameReset);              //event listener for the reset button