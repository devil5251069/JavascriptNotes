const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")

let player
let computer
let result

choiceBtns.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent
    computerTurn()
    playerText.textContent = `Player : ${player}`
    computerText.textContent = `Computer : ${computer}`
    resultText.textContent = checkWinner()
}))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1

    switch(randNum){
        case 1:
            computer = "ROCK"
            break
        case 2:
            computer = "PAPER"
            break
        case 3:
            computer = "SCISSORS"
            break
        }
}

function checkWinner(){
    if(player == computer){
        return "Draw"
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ?  "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ?  "YOU WIN!" : "YOU LOSE!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ?  "YOU WIN!" : "YOU LOSE!"
    }
}
/**
 * <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
   
    <div id="gameDiv">
        <h1 class="gameText" id="playerText">Player:</h1>
        <h1 class="gameText" id="computerText">Computer:</h1>
        <h1 class="gameText" id="resultText">Result:</h1>
    
        <button class = "choiceBtn">ROCK</button>
        <button class = "choiceBtn">PAPER</button>
        <button class = "choiceBtn">SCISSORS</button>

    </div>

    
    <script src="index.js"></script>

</body>
</html>

 */

/**
 * .choiceBtn{
    line-height: 30px;
    width: 150px;
}

#gameDiv{
    font-family: 'Brush Script MT', cursive;
    border: 3px solid;
    border-radius: 25px;
    padding: 10px;
    background-color: lightgray;
    text-align: center;
}
#playerText{
    color: blue;
}
#computerText{
    color: red;
}
 */