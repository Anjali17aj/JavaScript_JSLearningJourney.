//filter


//even
let nums = [1,2,3,4,5,6,7,8];
let ans = nums.filter((el) => {
    return el % 2 == 0; //even -->true, odd --> false.
});


//odd
let num = [1,2,3,4,5,6,7,8];
let answer = nums.filter((el) => {
    return el % 2 != 0; //even -->true, odd --> false. //el<5
});