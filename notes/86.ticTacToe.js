const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let options = ["","","","","","","","",""]
let currentPlayer = "X"
let running = false

initializeGame()

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    restartBtn.addEventListener("click", restartGame)
    statusText.textContent = `${currentPlayer}'s turn`
    running = true
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")
    if(options[cellIndex] != "" || !running){
        return
    }
    updateCell(this, cellIndex)
    // changePlayer()
    checkWinner()
}
function updateCell(cell, index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"
    statusText.textContent = `${currentPlayer}'s turn` 
}
function checkWinner(){
    let roundWon = false
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        if(cellA == "" || cellA == "" || cellA == ""){
            continue
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true
            break

        }
    }
    if(roundWon){
        statusText.textContent = `${currentPlayer} Wins!!!`
        running = false
    }
    else if(!options.includes("")){
        statusText.textContent = `DRAW!!!`
        running = false
    }
    else{
        changePlayer()
    }
}
function restartGame(){
    currentPlayer = "X"
    options = ["","","","","","","","",""]
    statusText.textContent = `${currentPlayer}'s turn`
    cells.forEach(cell => cell.textContent = "")
    running = true
}

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="gameContainer">
        <h1>TIC-TAC-TOE</h1>
        <div id = "cellContainer">
            <div cellIndex="0" class="cell"></div>
            <div cellIndex="1" class="cell"></div>
            <div cellIndex="2" class="cell"></div>
            <div cellIndex="3" class="cell"></div>
            <div cellIndex="4" class="cell"></div>
            <div cellIndex="5" class="cell"></div>
            <div cellIndex="6" class="cell"></div>
            <div cellIndex="7" class="cell"></div>
            <div cellIndex="8" class="cell"></div>
            
        </div>
        <h2 id="statusText"></h2>
        <button id="restartBtn">Restart</button>

    </div>
    <script src="index.js"></script>
</body>
</html> */

/**
 * .cell{
    width: 75px;
    height: 75px;
    border: 2px solid;
    box-shadow: 0 0 0 2px;
    line-height: 75px;
    font-size: 50px;
    cursor: pointer;
}
#gameContainer{
    font-family: "Permanent Marker", cursive;
    text-align: center;
}
#cellContainer{
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 225px;
    margin: auto;
}
 */