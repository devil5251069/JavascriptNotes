//await = makes an async function wait for a Promise

async function loadFile(){
    let fileLoad = false
    
    if(fileLoad){
        return "File Loaded"
    }
    else{
        throw "File NOT loaded"
    }
}

async function startProcess(){
    try{
        let msg = await loadFile()
        console.log(msg)
    }
    catch(error){
        console.log(error)
    }
}
startProcess()


// loadFile().then(value => console.log(value)).catch(error => console.log(error))