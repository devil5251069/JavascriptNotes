//setTimeeout() = invokes a function after a number of milliseconds
//                asynchronous function(doesn't pause execution)

let item = "cryptocurrency"
let price = 420.69

let timer1 = setTimeout(firstMessage, 3000)
let timer2 = setTimeout(secondMessage, 6000)
let timer3 = setTimeout(thirdMessage, 3000)

function firstMessage(){
    alert(`BUY THIS COURSE FOR $500`)
}
function secondMessage(){
    alert(`This is not a scam`)
}
function thirdMessage(){
    alert(`Do IT`)
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)

    console.log(`Thanks for buying`)
}