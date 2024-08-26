//// FUNCTIONS ////
// Function to get computer choice of RPS, randomly generated
function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum <= 0.33)
        return "rock";
    else if (randomNum > 0.33 && randomNum <= 0.66)
        return "paper";
    else if (randomNum > 0.66)
        return "scissors";
}

// Function to take human choice of RPS, through keyboard input
function getHumanChoice() {
    let choice = prompt("Choose your weapon: Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

// Function to play a single round of RPS, calling the above choice functions
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

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
    }
    
    else { 
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} \
beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`);
    }
}
//// FUNCTIONS ////

////   LOGIC   ////
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
////   LOGIC  ////

