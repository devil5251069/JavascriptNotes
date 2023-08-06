

function fibo(n){
    if(n == 0){
        return n
    }
    else if(n == 1){
        return n
    }
    return fibo(n - 1) + fibo (n - 2)
}

console.log(fibo(15))
