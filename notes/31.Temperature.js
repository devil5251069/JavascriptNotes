document.getElementById("submitBtn").onclick = function(){

    let temp

    if(document.getElementById("celsiusBtn").checked){
        temp = document.getElementById("input").value
        temp = Number(temp)
        temp = toCelsius(temp)
        document.getElementById("result").innerHTML = temp + "\u00B0 C"
    }
    else if(document.getElementById("fahrenheitBtn").checked){
        temp = document.getElementById("input").value
        temp = Number(temp)
        temp = toFahrenheit(temp)
        document.getElementById("result").innerHTML = temp + "\u00B0 F"
    }
    else{
        document.getElementById("result").innerHTML = "Select a unit"
    }

}

function toCelsius(temp){
    return (temp - 32) * 5/9
}

function toFahrenheit(temp){
    return (temp * (9/5)) + 32
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

    <label for="">Enter a temp</label><br>
    <input type="text" id="input"><br>
    <label for="">convert to:</label><br>
    
    <input type="radio" name="1" id="celsiusBtn">Celsius<br>
    <input type="radio" name="1" id="fahrenheitBtn">Fahrenheit

    <br>
    <input type="submit" value="bruh" id="submitBtn">
    <br>
    <label for="" id="result"></label>

    <script src="index.js"></script>

</body>
</html>

 */