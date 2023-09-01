//list, add, delete, quit
let todo = [];
let req = prompt("Please enter your request"); //request from user
console.log(req);


while(true){
    //request for quitting
    if(req == "quit") { 
        console.log("quitting app");
        break;
    }

    //request for listing tasks
    if(req == "list") { 
        console.log("------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------------");
    }  else if(req == "add"){  //request for adding task
        let task = prompt("please enter your task");
        todo.push(task); //push it into todo array
        console.log("task added");

    } else if(req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request, please try again");
    }
    req = prompt("please enter your request");
}