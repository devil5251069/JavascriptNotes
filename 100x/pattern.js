function pattern(n){
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= row; col++){
            process.stdout.write(col + " ");
        }
        console.log()
    }
}

pattern(5)