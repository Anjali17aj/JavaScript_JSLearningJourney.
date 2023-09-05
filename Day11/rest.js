//rest is just opposite of spread

function sum(...argumnt){
    for(let i=0; i<argumnt.length; i++){
        console.log("You gave us:", argumnt[i]);
    }
}
sum(1);
sum(1,3,5,6,7,8);