//create a function to roll a dice & always display the value of the dice (1 to 6).

function rollDice() {
    let randoms = Math.floor(Math.random() * 6) +1;
    console.log(randoms);
}

rollDice(); //Player1
rollDice(); //Player2
rollDice(); //Player3
rollDice();  //Player4