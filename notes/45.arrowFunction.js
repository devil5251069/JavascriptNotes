//arrow function = compact alternative to a traditional function expression
// =>

/*const greeting = function(userName){
    console.log(`Hello ${userName}`)
}*/


/*
const greeting = (userName) => {
    console.log(`Hello ${userName}`)
}



greeting("Aditya")
*/

// const percent = (x, y) => {
//     return (x/y) * 100
// }

// console.log(`${percent(37,50)}%`)

let grades = [110,50,90,80,70]

grades.sort((x, y) => y - x)


grades.forEach((element) => console.log(element))


