// function expression = function without a name(anonymous function)
//                       avoid polluting the global scope with names
//                       write it then forget about it

// sayHello()

// function sayHello(){
//     console.log("Hello")
// }

// const greeting = function(){
//     console.log("Hello")
// } 

// greeting()

let count = 0

document.getElementById("increaseBtn").onclick = function(){
    count += 1
    document.getElementById("myLabel").innerHTML = count
}

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1
    document.getElementById("myLabel").innerHTML = count
}

/*function increaseCount(){
    count += 1
    document.getElementById("myLabel").innerHTML = count
}

function decreaseCount(){
    count -= 1
    document.getElementById("myLabel").innerHTML = count
}
*/

/**
 * 
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

    <label id="myLabel">0</label><br>
    <!-- <button id = "decreaseBtn" onclick="decreaseCount()">Decrease</button><br>
    <button id = "increaseBtn" onclick="increaseCount()">Increase</button><br> -->

    <button id = "decreaseBtn" >Decrease</button><br>
    <button id = "increaseBtn" >Increase</button><br>
    

    <script src="index.js"></script>

</body>
</html>

 */