let userPoints = 0;
let compPoints = 0;
let compChoice;
const rpsChoices = ['rock', 'paper', 'scissors'];
const compChoices = ['compRock', 'compPaper', 'compScis'];

const showImg = (img) => {
    switch(img) {
        case 'userRock':
            document.getElementById(img)    
                .style.display = "block";
            document.getElementById('userPaper') 
                .style.display = "none";
            document.getElementById('userScis') 
                .style.display = "none";
            break;
        case 'userPaper':
            document.getElementById(img)    
                .style.display = "block";
            document.getElementById('userRock') 
                .style.display = "none";
            document.getElementById('userScis') 
                .style.display = "none";
            break;
        case 'userScis':
            document.getElementById(img)    
                .style.display = "block";
            document.getElementById('userRock') 
                .style.display = "none";
            document.getElementById('userPaper') 
                .style.display = "none";
            break;
    }
}

const rpsGame = (userInput) => {
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    compChoice = rpsChoices[randomNum];
    userInput.toString().toLowerCase();
    console.log(`You picked ${userInput}`);
    console.log(`Computer picked ${compChoice}`);
    switch (userInput) {
        case 'rock':
            switch(compChoice) {
                case 'scissors':
                    document.getElementById('compScis')
                        .style.display = "block";
                    document.getElementById('compRock')
                        .style.display = "none";
                    document.getElementById('compPaper')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'You win!';
                    document.getElementById("computerChoice").innerHTML = 'Scissors!';
                    userPoints++;
                    break;
                case 'paper':
                    document.getElementById('compPaper')
                        .style.display = "block";
                    document.getElementById('compRock')
                        .style.display = "none";
                    document.getElementById('compScis')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'You lose!';
                    document.getElementById("computerChoice").innerHTML = 'Paper!';
                    compPoints++;
                    break;
                default:
                    document.getElementById('compRock')
                        .style.display = "block";
                    document.getElementById('compPaper')
                        .style.display = "none";
                    document.getElementById('compScis')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'Tie!';
                    document.getElementById("computerChoice").innerHTML = 'Rock!';
            }
            break;
        case 'scissors':
            switch(compChoice) {
                case 'paper':
                    document.getElementById('compPaper')
                        .style.display = "block";
                    document.getElementById('compRock')
                        .style.display = "none";
                    document.getElementById('compScis')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'You win!';
                    document.getElementById("computerChoice").innerHTML = 'Paper!';
                    userPoints++;
                    break;
                case 'rock':
                    document.getElementById('compRock')
                        .style.display = "block";
                    document.getElementById('compScis')
                        .style.display = "none";
                    document.getElementById('compPaper')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'You lose!';
                    document.getElementById("computerChoice").innerHTML = 'Rock!';
                    compPoints++;
                    break;
                default:
                    document.getElementById('compScis')
                        .style.display = "block";
                    document.getElementById('compRock')
                        .style.display = "none";
                    document.getElementById('compPaper')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'Tie!';
                    document.getElementById("computerChoice").innerHTML = 'Scissors!';
            }
            break;
        case 'paper':
            switch(compChoice) {
                case 'rock':
                    document.getElementById('compRock')
                        .style.display = "block";
                    document.getElementById('compScis')
                        .style.display = "none";
                    document.getElementById('compPaper')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'You win!';
                    document.getElementById("computerChoice").innerHTML = 'Rock!';
                    userPoints++;
                    break;
                case 'scissors':
                    document.getElementById('compScis')
                        .style.display = "block";
                    document.getElementById('compRock')
                        .style.display = "none";
                    document.getElementById('compPaper')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'You lose!';
                    document.getElementById("computerChoice").innerHTML = 'Scissors!';
                    compPoints++;
                    break;
                default:
                    document.getElementById('compPaper')
                        .style.display = "block";
                    document.getElementById('compRock')
                        .style.display = "none";
                    document.getElementById('compScis')
                        .style.display = "none";
                    document.getElementById("gameDecision").innerHTML = 'Tie!';
                    document.getElementById("computerChoice").innerHTML = 'Paper!';
            }
            break;
    }
    document.getElementById('userScore').innerHTML = userPoints;
    document.getElementById('compScore').innerHTML = compPoints;
}

const reset = () => {
    userPoints = 0;
    compPoints = 0;
    document.getElementById('userScore').innerHTML = userPoints;
    document.getElementById('compScore').innerHTML = compPoints;
    document.getElementById("gameDecision").innerHTML = '';
    document.getElementById('compPaper')
        .style.display = "none";
    document.getElementById('compRock')
        .style.display = "none";
    document.getElementById('compScis')
        .style.display = "none";
    document.getElementById('userPaper')
        .style.display = "none";
    document.getElementById('userRock')
        .style.display = "none";
    document.getElementById('userScis')
        .style.display = "none";
}

const firstToTen = () => {
    if(userPoints !== 10 && compPoints !== 10) {
        return;
    }
    else {
        if(userPoints === 10) {
            window.location.replace("./winOrLose.html?w");
        } else {
            window.location.replace("./winOrLose.html?l");
        }
    }
}

const startOver = () => {
    window.location.replace("./index.html")
}

const checkInput = () => {
    userInput = document.getElementById('userInput').value;
    userInput.toString().toLowerCase();
    switch(userInput) {
        case 'rock': 
        case 'r':
        case 'roc':
            rpsGame('rock'); 
            showImg('userRock'); 
            firstToTen();
            document.getElementById('userInput')
                .style.backgroundColor = "#ffe311";
            break;
        case 'paper':
        case 'p': 
        case 'pa':
        case 'pap':
        case 'pape':
            rpsGame('paper'); 
            showImg('userPaper'); 
            firstToTen();
            document.getElementById('userInput')
                .style.backgroundColor = "#ffe311";
            break;
        case 'scissors':
        case 's':
        case 'sc':
        case 'sci':
        case 'scis':
        case 'sciss':
        case 'scisso':
        case 'scissor':
            rpsGame('scissors'); 
            showImg('userScis'); 
            firstToTen();
            document.getElementById('userInput')
                .style.backgroundColor = "#ffe311";
            break;
        default:
            document.getElementById('userInput')
                .style.backgroundColor = "#ff7d7d";
    }
}

if(window.location.href.includes('winOrLose.html?l')) {
    document.getElementById('winOrLose').innerHTML = 'You lose!';
    document.getElementById('body')
        .style.background = "hsla(355, 74%, 62%, 1)";
} else {
    document.getElementById('winOrLose').innerHTML = 'You win!';
    document.getElementById('body')
        .style.background = "hsla(136, 48%, 54%, 1)";
}