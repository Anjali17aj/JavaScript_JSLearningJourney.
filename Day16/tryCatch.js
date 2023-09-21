function saveToDb(data) {
    return new Promise((resolve, reject)=> {
        let internetSpeed = Math.floor(Math.random() * 10)+1;
        if(internetSpeed>4){
            resolve("Success : your data was saved");
        } else {
            reject("failure: weak connection. data not saved");
        }
    });
}
saveToDb("Anjali studies at UC, La") //req = promise Object.
.then (() => {
   console.log("promise was resolved"); 
})
.catch(()=>{
    console.log("Promise was rejected");
});