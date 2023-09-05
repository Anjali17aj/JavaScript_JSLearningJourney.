function min(msg, ...args){
    console.log(msg);
    args.reduce((min, el) => {
        if(min>el){
            return el;
        } else {
            return min;
        }
    })
}

min("hello",-20,12,11,13,14);