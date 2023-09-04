function getMin(nums){
    let min = nums.reduce((min, el)=> {
        if(min<el){
            return min;
        } else {
            return el;
        }
    });
    return min;
}

let nums = [100,20,30,35,40];
getMin(nums);