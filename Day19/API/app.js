let url = "https://catfact.ninja/fact";

fetch(url)//fetch returns a promise
.then((res)=>{
   console.log(res);
   return res.json(); //data comes in readable format using this function
})
   .then((data)=>{
      //console.log(data);
      console.log(data.fact);
   }) 
.catch((err) =>{
    console.log("error",err);
});