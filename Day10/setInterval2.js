let id = setInterval( () => {
    console.log("New Orleans");
}, 2000);
console.log(id);

let id2 = setInterval( () => {
    console.log("Georgia");
}, 4000);
console.log(id2);
clearInterval(id2); //to stop.
