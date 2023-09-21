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
.then ((result) => {
   console.log("DATA1 Saved. promise was resolved");
   console.log("result of promise", result);
   return saveToDb("helloWorld");
   })
   .then((result) => {
        console.log("data2 saved");
        console.log("result of promise", result);
        return saveToDb("Anjali");
   })
   .then(() => {
    console.log("data3 saved");
    console.log("result of promise", result);
   })
.catch(()=>{
    console.log("Promise was rejected");
    console.log("error of promise", error);
});