//async = makes a function return a promise

async function loadFile(){
    let fileLoad = false

    if(fileLoad){
        return "File Loaded"
    }
    else{
        throw "File NOT loaded"
    }
}



loadFile().then(value => console.log(value)).catch(error => console.log(error))