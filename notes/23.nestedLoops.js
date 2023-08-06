let symbol = window.prompt("Enter a symbol to use")
let rows = window.prompt("Enter # of rows");
let column = window.prompt("Enter # of column");

for(let i = 1; i <= rows; i += 1){
    for(let j = 1; j <= column; j += 1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}