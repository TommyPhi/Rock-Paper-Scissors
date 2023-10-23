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