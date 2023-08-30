const  favMovie = "Avatar";

let guess = prompt("guess my favourite movie");

while((guess!=favMovie)) {
    if(guess == "quit"){
        console.log("You quit");
        break;
    }

    guess = prompt("Wrong guess, Please try again");
}

if(guess == favMovie){
    console.log("Congrats!!");
}