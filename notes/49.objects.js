//object = a group of properties and methods
//         properties = what an object has
//         methods = what an object can do
//         use . to access properties/ methods

const car1 = {
    model : "Mustang",
    color : "Red",
    year  : 2023,

    drive : function(){
        console.log("You drive the car")
    },

    brake : function(){
        console.log("You step on the brakes")
    }
}

const car2 = {
    model : "Corvette",
    color : "Blue",
    year  : 2024,

    drive : function(){
        console.log("You drive the car")
    },

    brake : function(){
        console.log("You step on the brakes")
    }
}


console.log(car2)
console.log(car2.model)
console.log(car2.color)
console.log(car2.year)
console.log(car2.drive)
console.log(car2.brake)