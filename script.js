function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum <= 0.33)
        return "rock";
    else if (randomNum > 0.33 && randomNum <= 0.66)
        return "paper";
    else if (randomNum > 0.66)
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Choose your weapon: Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Tie! You both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
        }
    
        else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
            ){
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} \
beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
            computerScore++;
        }
    
        else { 
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} \
beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`);
            humanScore++;
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Final Score: Player - ${humanScore}, Computer ${computerScore}`);
}

playGame()