//Method Chaining: multiple methods in a string

//let msg = "      hello    "
// let newMsg = msg.trim();
// console.log("after trim :",newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after upper case",newMsg);


let msg = "      hello    "
let newMsg = msg.trim().toUpperCase(); //method chaining
console.log(newMsg);