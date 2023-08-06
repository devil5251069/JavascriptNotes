// Map = object that holds key value pairs of any data type

const store = new Map([
    ["T-shirt", 20],
    ["Jeans", 30],
    ["Socks", 10],
    ["Underwear", 50]


])

// let shoppingCart = 0

// shoppingCart += store.get("T-shirt")
// shoppingCart += store.get("Underwear")

// console.log(shoppingCart)

// store.set("Hat", 40)
// store.delete("Hat")

// console.log(store.has("Hat"))

console.log(store.size)

store.forEach((value, key) => console.log(`${key} , $${value}`) )