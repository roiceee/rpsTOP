function showBotChoice(botChoice) {
    const container = document.querySelector('.choice-holder-2');
    const removeh2 = document.querySelectorAll('.image1');
    removeh2.forEach((description) => {
        description.setAttribute('style', 'display: none');
    })
    const img = document.createElement('img');
    img.setAttribute('class', 'image');
    img.setAttribute('style', 'display: none');
   setTimeout (() => {
    img.setAttribute('style', 'display: block');
   },250) 
   switch(botChoice) {
    case 1: img.src = "RPS_Resource/rock-bot.jpg";
    break;
    case 2: img.src = "RPS_Resource/paper-bot.jpg";
    break;
    case 3: img.src = "RPS_Resource/scissors-bot.jpg";
    break;
}
        
    
    container.append(img);
}
function botRandom() {
    botChoice = Math.floor((Math.random() * 3) + 1);
}
function showPlayerChoice(playerChoice) {
    const container = document.querySelector('.choice-holder-1');
    const img = document.createElement('img');
    img.setAttribute('class', 'image');
    img.setAttribute('style', 'display: none');

    setTimeout(()=> {
        img.setAttribute('style', 'display: block');
    }, 250);
    switch(playerChoice) {
        case 1: img.src = "RPS_Resource/rock-man.jpg";
        break;
        case 2: img.src = "RPS_Resource/paper-man.jpg";
        break;
        case 3: img.src = "RPS_Resource/scissors-man.jpg";
        break;
    }
    
    container.append(img);
}
function cleanImage() {
    
    const images = document.querySelectorAll('.image');
    images.forEach((pic) => {
        pic.remove();
    })
}


function compare(playerchoice, botChoice) {


    if (playerchoice === 1) {
        switch(botChoice) {
            case 1: console.log("It's a tie!");
            break;
            case 2: console.log("You lose!");
            botScore++;
            break;
            case 3: console.log("You win!");
            playerScore++;
            break;
        }
    }
    //user chooses paper
    else if (playerchoice === 2) {
        switch(botChoice) {
            case 1: console.log("You win!");
            playerScore++;
            break;
            case 2: console.log("It's a tie!");
            break;
            case 3: console.log("You lose!");
            botScore++;
            break;
        }
    }
    //user chooses scissors
    else if (playerchoice === 3) {
        switch(botChoice) {
            case 1: console.log("You lose!");
            botScore++;
            break;
            case 2: console.log("You win!");
            playerScore++;
            break;
            case 3: console.log("It's a tie!");
            break;
        }
    }
    }
function update(playerScore, botScore) {
    const roundCounter = document.querySelector('.round-counter');
    roundNum++;
    roundCounter.textContent =  `ROUND ${roundNum}`
    const pScore = document.querySelector('.score-counter-1');
    const bScore = document.querySelector('.score-counter-2');
    pScore.textContent = textContent = `Score: ${playerScore}`;
    bScore.textContent = textContent = `Score: ${botScore}`;

    if (playerScore == maxScore) {
        roundCounter.textContent = "YOU WIN!!!";
        swapButtons();
    }
    else if (botScore == maxScore) {
        roundCounter.textContent = "YOU LOSE!!!";
        swapButtons();
    }
   

}
function swapButtons() {
    const container = document.querySelector('.buttons');
    const groupOfButtons = document.querySelectorAll('button');

    groupOfButtons.forEach((button) => {
        if (button.classList == 'refresh') {
            return;
        }
        else {
            button.setAttribute('style', 'display: none');
        }
    })
    //create another button
    const playAgainButton = document.createElement('button');
    playAgainButton.setAttribute('class', 'playAgain')
    playAgainButton.textContent = "PLAY AGAIN";
    container.append(playAgainButton);
    playAgainButton.addEventListener('click', () => {
    restoreButtons();
    })
}

function restoreButtons() {
    const buttons = document.querySelectorAll('button') 

    buttons.forEach((button) => {
        if (button.classList == 'refresh') {
            return;
        }
        else if (button.classList == 'playAgain') {
            button.setAttribute('style', 'display: none');
        }
        else {
            button.setAttribute('style', 'display: block');
        }
    })
    resetGame()
}

function resetGame() {
    //code to reset the game
   maxScore = 5;
   roundNum = 0;
   botScore = 0;
   playerScore = 0;

    const roundCounter = document.querySelector('.round-counter');
    roundCounter.textContent =  `PRESS ANY BUTTON BELOW TO START`
    const pScore = document.querySelector('.score-counter-1');
    const bScore = document.querySelector('.score-counter-2');
    pScore.textContent = textContent = `Score: ${playerScore}`;
    bScore.textContent = textContent = `Score: ${botScore}`;

    const images = document.querySelectorAll('.image');

    images.forEach((image) => {
        image.setAttribute('style', 'display: none');
    })
    const removeh2 = document.querySelectorAll('.image1');
    removeh2.forEach((description) => {
        description.setAttribute('style', 'display: block');
    })

    

    

   
}

/*
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        if (button.classList == 'rock') {
           button.setAttribute('disabled', 'disabled');
           button.setAttribute('class', 'disabled');
        }
        else if (button.classList == 'paper') {
           
            button.setAttribute('disabled', 'disabled');
            button.setAttribute('class', 'disabled');
        }
        else if (button.classList == 'scissors') {
            button.setAttribute('disabled', 'disabled');
            button.setAttribute('class', 'disabled');
        }
    }) 
}
*/
function setActionListener() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList == 'rock') {
                console.log(1);
                playerchoice = 1;
                botRandom();
                cleanImage();
                showBotChoice(botChoice);
                showPlayerChoice(playerchoice);
                compare(playerchoice, botChoice);
                update(playerScore, botScore);
                
            }
            else if (button.classList == 'paper') {
                console.log(2);
                playerchoice = 2;
                botRandom();
                cleanImage();
                showBotChoice(botChoice);
                showPlayerChoice(playerchoice);
                compare(playerchoice, botChoice);
                update(playerScore, botScore);
                
            }
            else if (button.classList == 'scissors') {
                console.log(3);
                playerchoice = 3;
                botRandom();
                cleanImage();
                showBotChoice(botChoice);
                showPlayerChoice(playerchoice);
                compare(playerchoice, botChoice);    
                update(playerScore, botScore);        
            }
            else if (button.classList == 'refresh') {
                document.location.reload();
            }
        })
    })
}



//start
let botChoice;
let playerchoice;
let maxScore = 5;
let roundNum = 0;
let botScore = 0;
let playerScore = 0;
setActionListener();


