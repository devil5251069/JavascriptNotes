//user input

//easy with a window prompt

// let username = window.prompt("What is your name? ")
// console.log(username)

//difficult with a html box text

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value
    console.log(username)
    document.getElementById("myLabel").innerHTML = "Hello" + username 
}