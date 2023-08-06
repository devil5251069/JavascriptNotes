//synchronous code = In an ordered sequence.
//                   Step-by-step linear instructions
//                   (start now, finish now)

//asynchronous code = out of sequence
//                  Ex. Access a database
//                      Fetch a file
//                      Taska that take time
//                  (start now, finish sometime later)

console.log("START")
// console.log("This step is synchronous")

setTimeout(() => console.log("This is asynchronous"), 3000)

console.log("END")