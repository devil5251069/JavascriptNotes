//rest parameters = represents an indefinite number of parameters
//                  (packs arguments into arrays)

let a,b,c,d,e 

a = 1
b = 2
c = 3
d = 4
e = 5

console.log(sum(a,b,c,d,e))

// function sum(a, b){
//     return a + b
// }

// function sum(a, b, c){
//     return a + b + c
// }

function sum(...numbers){
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}