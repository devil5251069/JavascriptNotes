
let element = document.querySelector("#fruit")
let children = Array.from(element.children)


children.forEach(child =>  child.style.backgroundColor = "green")




/*
let element = document.querySelector("#vegetables")

let parent = element.parentElement
parent.style.backgroundColor = "lightgreen"
*/

//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)