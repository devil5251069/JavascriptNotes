//2d Array 


let fruits = ["apples","oranges","banana"]
let vegetables = ["carrots", "onions", "potatoes"]
let meats = ["eggs", "chicken", "fish"]

let groceryList = [fruits, vegetables, meats]

console.log(groceryList[0][1])

for (let list of groceryList) {
  for(let food of list){
    console.log(food)
  }

}
