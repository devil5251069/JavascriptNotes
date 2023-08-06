// The Date object is used to work with dates & times

let date = new Date()

// let date = new Date(1555945646540000)

// let date = new Date(2023, 0, 1, 2, 3, 4, 5)

// let date = new Date("January 1, 2023 00:00:00")

// let year = date.getFullYear()
// let dayOfMonth = date.getDate()
// let dayOfWeek = date.getDay()
// let month = date.getMonth()
// let hour = date.getHours()
// let minutes = date.getMinutes()
// let seconds = date.getSeconds()

/*
date.setFullYear(2069)
date.setMonth(8)
date.setDate(31)
date.setHours(25)
date.setMinutes(1)
date.setSeconds(30)
date.setMilliseconds(0)
*/


// date = date.toLocaleString()

// console.log(date)
document.getElementById("myLabel").innerHTML = formatDate(date) +" " + formatTime(date)

function formatDate(date){
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return `${day}/${month}/${year}`
}

function formatTime(date){
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let am_pm = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12

    return `${hours}:${minutes}:${seconds} ${am_pm}`
}