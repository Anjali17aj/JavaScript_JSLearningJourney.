//promise
//Promises : applying promises to our callback hell
//asynchronous
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
        })
    }

    //try in console..

    changeColor("red",1000)
    .then(() =>{
        console.log("red color was completed");
        return changeColor("Orange",1000);
    })
    .then(()=>{
        console.log("red color was completed");
        return changeColor("Green",1000);
    })
    .then(()=>{
        console.log("green color was completed");
        return changeColor("Blue",1000);
    })
    .then(()=>{
        console.log("blue color was completed");
    })