
function min(...args){
    args.reduce((min, el) => {
        if(min>el){
            return el;
        } else {
            return min;
        }
    })
}
min(12,17,11,12);
 



