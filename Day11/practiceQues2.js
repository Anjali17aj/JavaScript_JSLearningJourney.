//create a function to find the min number in an array.

let nums = [100,20,30,35,40];
let min = nums.reduce((min, el)=> {
    if(min<el){
        return min;
    } else {
        return el;
    }
});
console.log(min);

