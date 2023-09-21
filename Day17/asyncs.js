async function greet() {
    throw "Weak connection";
    return "Namaste!";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was:", resolved);
})
.catch((err) => {
    console.log("promise was rejected with err: ", err);
});

//arrow functions can also be async functions.

let demo = async () => {
    return 5;
};