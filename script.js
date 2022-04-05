function showBotChoice(botChoice) {
    const container = document.querySelector('.choice-holder-2');
    const removeh2 = document.querySelectorAll('.description');
    removeh2.forEach((description) => {
        description.remove();
    })
    const img = document.createElement('img');
    img.setAttribute('class', 'image');
    img.setAttribute('style', 'display: none');
   setTimeout (() => {
    img.setAttribute('style', 'display: block');
   },250) 
   switch(botChoice) {
    case 1: img.src = "RPS_resources/rock-bot.jpg";
    break;
    case 2: img.src = "RPS_resources/paper-bot.jpg";
    break;
    case 3: img.src = "RPS_resources/scissors-bot.jpg";
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
        case 1: img.src = "RPS_resources/rock-man.jpg";
        break;
        case 2: img.src = "RPS_resources/paper-man.jpg";
        break;
        case 3: img.src = "RPS_resources/scissors-man.jpg";
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
        disableButtons();
    }
    else if (botScore == maxScore) {
        roundCounter.textContent = "YOU LOSE!!!";
        disableButtons();
    }

}

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


