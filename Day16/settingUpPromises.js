function saveToDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10) +1;
    if(internetSpeed>4){
        success();
    } else {
        failure();
    }
}

saveToDb(
    "Anjali is a student at University of California, Berkley",
    () => {
        console.log("Success : your data was saved");
        saveToDb(
            "Hello World, I am Anjali.",
            () => {
                console.log("Success2 : data2 Saved");
                saveToDb(
                    "Anjali",
                    () => {
                        console.log("Success3: data3 saved");
                    },
                    () => {
                        console.log("Failure3 : weak connection");
                    }
                );
            },
        () => {
            console.log("Failure2 : weak connection");
        }
        );
    },
    () => {
       console.log("failure: weak connection. data not saved"); 
    }
);