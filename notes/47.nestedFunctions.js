//nested functions = Function inside other functions
//                   Outer function have access to inner functions
//                   Inner functions are hidden from outside functions
//                   used in closures


let userName = "Aditya"

let userInbox = 0

login()

function login(){
    displayUserName()
    displayUserInbox()

    function displayUserName(){
        console.log(`Welcome ${userName}`)
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`)
    }
}

function displayUserName(){
    console.log(`Welcome ${userName}`)
}

function displayUserInbox(){
    console.log(`You have ${userInbox} new messages`)
}