// let x,y,z 
// console.log(x)
// console.log(y)
// console.log(z)

document.getElementById("rollButton").onclick = function(){
    let x = Math.floor(Math.random() * 6) + 1
    let y = Math.floor(Math.random() * 6) + 1
    let z = Math.floor(Math.random() * 6) + 1

    document.getElementById("xlabel").innerHTML = x
    document.getElementById("ylabel").innerHTML = y
    document.getElementById("zlabel").innerHTML = z
}

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <label id="xlabel"></label><br>
    <label id="ylabel"></label><br>
    <label id="zlabel"></label><br>

    <button type="button" id="rollButton">roll</button>

    <script src="index.js"></script>
</body>
</html>
*/