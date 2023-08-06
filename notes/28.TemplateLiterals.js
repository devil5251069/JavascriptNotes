//Template literals

let userName = "aditya"
let items = 3
let total = 75

// console.log("Hello", userName)
// console.log("You have",items,"in your cart")
// console.log("Your total is : €", total)

// console.log(`Hello ,${userName}`)
// console.log(`You have ${items} in your cart`)
// console.log(`Your total is €${total}`)

let text = `Hello ,${userName}<br>
You have ${items} in your cart<br>
Your total is €${total}`

document.getElementById("myLabel").innerHTML = text