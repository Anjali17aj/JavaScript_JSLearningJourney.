h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange){
    setTimeout(()=> {
        h1.style.color = coloe;
        if(nextColorChange) nextColorChange();
    }, delay);
    }
    changeColor("red", 1000, () => {
        changeColor("orange", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("blue", 1000, () => {
                    changeColor("brown", 1000);
        });
    });
});
});
//callback nesting = callbackhell