let url = "https://catfact.ninja/fact";

fetch(url)//fetch returns a promise
.then((res)=>{
   return res.json(); //data comes in readable format using this function
})
   .then((data)=>{
      //console.log(data);
      console.log("Cat fact data1 = ", data.fact);
      return fetch(url);
   }) 
   .then((res)=>{
    return res.json(); //data comes in readable format using this function
 })
    .then((data2)=>{
       //console.log(data);
       console.log("Cat fact data2 = ", data2.fact);
    })
.catch((err) =>{
    console.log("error:",err);
});

console.log("I am Anjali.")