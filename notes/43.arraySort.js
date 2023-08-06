let grades = [100,50,90,60,80,70]

grades = grades.sort(descendingSort)

grades.forEach(print)

function print(element){
    console.log(element)
}

function descendingSort(x, y){
    return y - x
}

function ascendingSort(x, y){
    return x - y
}