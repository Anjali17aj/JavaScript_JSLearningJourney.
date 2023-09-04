//check if alll numbers in our array are multiples of 10 or not.

let nums = [10,20,30,40,50];
let ans = nums.every((el) => el % 10 == 0);
console.log(ans);