//1 is rock, 2 is paper, 3 is scissors

//userInput

let userInput;

do {
    do {
        userInput = parseInt(prompt("1 - Rock\n2 - Paper\n3 - Scissors"));
    } while (!(userInput === 1 || userInput === 2 || userInput === 3 ));
    
    
    //bot generates a random number
    const botChoice = Math.floor((Math.random() * 3) + 1);
    console.log(userInput);
    console.log(botChoice);
    
    print(userInput, botChoice);
    check(userInput, botChoice);
    
    
} while (ask());





function print(userInput, botChoice) {
//print user input
switch(userInput) {
    case 1: console.log("The user chose: Rock");
    break;
    case 2: console.log("The user chose: Paper");
    break;
    case 3: console.log("The user chose: Scissors");
    break;
}

//print bot output

switch(botChoice) {
    case 1: console.log("The bot chose: Rock");
    break;
    case 2: console.log("The bot chose: Paper");
    break;
    case 3: console.log("The bot chose: Scissors");
    break;
}
}




//compare user Input and bot.
//user chooses rock
function check(userInput, botChoice) {


if (userInput === 1) {
    switch(botChoice) {
        case 1: console.log("It's a tie!");
        break;
        case 2: console.log("You lose!");
        break;
        case 3: console.log("You win!");
        break;
    }
}
//user chooses paper
else if (userInput === 2) {
    switch(botChoice) {
        case 1: console.log("You win!");
        break;
        case 2: console.log("It's a tie!");
        break;
        case 3: console.log("You lose!");
        break;
    }
}
//user chooses scissors
else if (userInput === 3) {
    switch(botChoice) {
        case 1: console.log("You lose!");
        break;
        case 2: console.log("You win!");
        break;
        case 3: console.log("It's a tie!");
        break;
    }
}
}

function ask() {
    let choice;
    do {
        choice = parseInt(prompt("Do you want to play again?\n\n1 - Yes\n2 - No"));
    } while (!(choice === 1 || choice === 2));

    if (choice === 1 ) {
        return true;
    }
    else {
        return false;
    }

}