//clock program in js

const myLabel = document.getElementById("myLabel")

update()
setInterval(update, 1000)

function update(){
    let date = new Date()
    myLabel.innerHTML = formatTime(date)

    function formatTime(){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        let am_pm = hours >= 12 ? "PM" : "AM"
        hours = (hours % 12) || 12

        hours = formatZeroes(hours)
        minutes = formatZeroes(minutes)
        seconds = formatZeroes(seconds)
        
        return `${hours}:${minutes}:${seconds} ${am_pm}`
    }

    function formatZeroes(time){
        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }

}