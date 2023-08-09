// const element = document.getElementById("myButton")
// element.onclick = doSomething

// const element = document.body

// element.onload = doSomething

// const element = document.getElementById("myText")
// element.onchange = doSomething

const element = document.getElementById("myDiv")
// element.onmouseover = doSomething
// element.onmouseout = doSomethingElse

element.onmousedown = doSomething
element.onmouseup = doSomethingElse

function doSomething(){
    // alert("You did something")
    element.style.backgroundColor = "red"
}

function doSomethingElse(){
    element.style.backgroundColor = "lightgreen"
}