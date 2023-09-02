let str = ["Hey","Anjali,","How are you doing","?"];
function concat(str){
    let result ="";

    for(let i=0; i<str.length; i++){
        result+= str[i];
    }
    return result;
}
let concatenatedString = concat(str);
console.log(concatenatedString);