function pattern(n){
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= row; col++){
            process.stdout.write(col + " ");
        }
        console.log()
    }
}

function starPattern(n){
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= 2*row ; col++){
            process.stdout.write("*" + " ");
        }
        console.log()
    }
}
function starPattern2(n){
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= 2*row - 1 ; col++){
            process.stdout.write("*" + " ");
        }
        console.log()
    }
}

function complex(n){
    let sum = 0
    for (let index = 0; index <= n; index++) {
        sum += index
        
    }
    return sum
}

// starPattern2(5)