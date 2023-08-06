const answer = Math.floor(Math.random() * 10 + 1)

let guesses = 0

document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value = guesses += 1

    if(guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guess to win`)
    }
    else if(guess < answer){
        alert(`Too small`)
    }
    else{
        alert(`Too large`)
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

    <h1>Number Guessing game</h1>
    <p>Pick a # between 1-10</p>
    <label >Enter a guess</label>

    <input id="guessField">
    <input type="submit"  id="submitButton">
    
    <script src="index.js"></script>

</body>
</html>

 */