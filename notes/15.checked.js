document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox")

    const visaBtn = document.getElementById("visaBtn")

    const mastercardBtn = document.getElementById("mastercardBtn")

    const paypalBtn = document.getElementById("paypalBtn")

    if(myCheckBox.checked){
        console.log("You are Subscribed")
    }
    else{
        console.log("You are Not Subscribed")
    }

    if(visaBtn.checked){
        console.log("You are paying with a VISA")
    }
    else if(mastercardBtn.checked){
        console.log("You are paying with a MasterCard")
    }
    else if(paypalBtn.checked){
        console.log("You are paying with a PayPal")
    }
    else{
        console.log("You must select a payment")
    }
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

    <label for="myCheckBox">Subscribe</label>
    <input type="checkbox" name="" id="myCheckBox"><br>

    <label for="visaBtn">Visa</label>
    <input type="radio" name="card" id="visaBtn">

    <label for="mastercardBtn">Mastercard</label>
    <input type="radio" name="card" id="mastercardBtn">

    <label for="paypalBtn">Paypal</label>
    <input type="radio" name="card" id="paypalBtn"><br>

    <button id="myButton">Submit</button>

    <script src="index.js"></script>
</body>
</html>
*/