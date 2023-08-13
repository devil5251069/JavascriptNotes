//cookie = a small text file stored on your computer
//         used to remember information about the user
//         saved in name = value parts


// console.log(navigator.cookieEnabled)
/*
document.cookie = "firstName=Aditya; expires=Sun, 1 Januray 2030 12:00:00 ITC; path =/ "

document.cookie = "lastName=Bhave; expires=Sun, 1 Januray 2030 12:00:00 ITC; path =/ "


console.log(document.cookie)*/

const firstText = document.querySelector("#firstText")
const lastText = document.querySelector("#lastText")

const myBtn = document.querySelector("#myBtn")

const myCBtn = document.querySelector("#myCBtn")

myBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365)
    setCookie("lastName", lastText.value, 365)
})

myCBtn.addEventListener("click", () => {
  firstText.value = getCookie("firstName")
  lastText.value = getCookie("lastName")
})

// setCookie("firstName", "Aditya", 365)
// setCookie("lastName", "Bhave", 365)

// console.log(getCookie("firstName"))

// deleteCookie("firstName")
// deleteCookie("lastName")


function setCookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expires = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value}; ${expires}; path=/`
}



function deleteCookie(name){
    setCookie(name,null,null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split("; ")
    console.log(cArray)
    let result = null 
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}
// console.log(document.cookie)