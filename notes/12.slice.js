//slice

let fullname = "Aditya Bhave"
let firstname
let lastname

// firstname = fullname.slice(0, 6)
// lastname = fullname.slice(7)

lastname = fullname.slice(fullname.indexOf(" ") + 1)
firstname = fullname.slice(0, fullname.indexOf(" "))

console.log(lastname)
console.log(firstname)