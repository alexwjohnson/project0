TIC TAC TOE 
======================================================================
version.vt100.00

# Overview
 This is a game in which two players alternately put Xs and Os in compartments of a figure. 
 The figure is formed by two vertical lines crossing two horizontal lines. 
 Each player tries to get a row of three Xs, or three Os, before their opponent does. 
 Amazing!

## __Play:__ 
 
X always starts.

Players take turns to click on an empty square

Wins, losses and draws or displayed

Use the 'reset' to bail at any point.



## __Languages:__ 

HTML, CSS, JavaScript, jQuery


## __Workflow__ 

JavaScript functionality:

_takeTurn()_  ... mainline code ....

* Called by jQuery on-click event listener.
* Checks the selected square in the frame is empty.
* If empty it will populate the selected square with the current player 
('X' or 'O') and update the 'currentBoard' array which maps each square as a 0 based array: the top-left square is index(0) to bottom-right square which is index(8). 
* Calls function changePlayer()
* Calls function findWinner()

_gameReset()_

* Called by jQuery on-click event listener attached to the 'reset' button.
* Will reset all constants used to track game progress and messages rendered to the screen
* This function is _not_ called by the mainline function: takeTurn()

_changePlayer()_
* Called by takeTurn() 
* References 'currentPlayer' variable against a ternery and changes it to the alternate player (e.g from 'X' to 'O')

_findWinner()_

* Called by takeTurn() 
* Iterates through constant 'winCombos' which is a nested array of all possible winning combinations : rows, cols and diagonals
* Each wining combo istested against the state of the 'currentGame' array 
to determine who hhas won. 
* Returns draw if the 'currentGame' array is fully ppulated bu no winning combo is found.
* A win, lose or draw result, when found, is passed in as an argument to helper function 'gameResult()'. 

_gameResult(result)_
* Helper function for findWinner(). 
* Takes an argument of a win/lose/draw string.
* The function will render who has won, or a draw, and tha the game is over back to the UI. 



_Game play variables and arrays_

```
//nested array of all possible winning combinations.

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
```

```
// empty array to track user moves in the current game.

let currentBoard = ['','','','','','','','',''];
```

```
// default the player to 'X' for the first move of a given game.

let currentPlayer = "X";  
```

```
// jQuery const of all elements on the current board.

const $tiles = $('div.tile');  
```
