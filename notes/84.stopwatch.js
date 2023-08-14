const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#startBtn")

const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalId
let hrs = 0
let mins = 0
let secs = 0

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false
        startTime = Date.now() - elapsedTime
        intervalId = setInterval(updateTime, 1000)
    }
})
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true
        elapsedTime = Date.now() - startTime
        clearInterval(intervalId)
    }
})
resetBtn.addEventListener("click", () => {
    paused = true
    clearInterval(intervalId)
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    hrs = 0
    mins = 0
    secs = 0
    timeDisplay.textContent = "00:00:00"
})

function updateTime(){
    elapsedTime = Date.now() - startTime
    secs = Math.floor((elapsedTime / 1000) % 60)
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)


    timeDisplay.textContent = `${hrs}:${mins}:${secs}`
}

function pad(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit
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
    <div id="timeContainer">
        <div id="timeDisplay">00:00:00</div>
        <button id="startBtn" class = "timerBtn">Start</button>
        <button id="pauseBtn" class = "timerBtn">Pause</button>
        <button id="resetBtn" class = "timerBtn">Reset</button>
        
    </div>
    
    <script src="index.js"></script>

</body>
</html>

 */

/**
 * .timerBtn{
    width: 80px;
    height: 30px;
    border: 3px solid;
    border-radius: 12px;
    background-color: #333333;
    color: white;
    cursor: pointer;
    font-family: consolas, monospace;
}

#timeDisplay{
    font-size: 75px;
    color : #40c437;
    font-family: consolas, monospace;

}

#timeContainer{
    text-align : center;
    border : 3px solid;
    border-radius: 25px;
    background-color: #222222;
}
 */