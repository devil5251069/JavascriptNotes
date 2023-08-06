let total = 0

function sum(a, b){
    
    while(a !== b){
        total += a
        a++
    }

    return total + b

}

console.log(sum(1, 5))