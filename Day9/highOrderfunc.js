function multipleGreet(func, count){ //higher order function
   for(let i=1; i<=count; i++){
    func();
   }
}

let greet = function(){
    console.log("Hello")
}
multipleGreet(greet, 2)