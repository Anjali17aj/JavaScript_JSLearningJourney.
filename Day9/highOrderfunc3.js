
function oddEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;  
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("Wrong request");
    }
}
// let request = "odd"; //even
// let func = oddEvenFactory(request);
// console.log(request);
// console.log(func(11));

let request = "even"; //even
let func = oddEvenFactory(request);
console.log(request);
console.log(func(10));
