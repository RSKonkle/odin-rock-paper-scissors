function getComputerChoice() {
    let randomNum = Math.random();
    
    if (randomNum <= 0.33)
        return "rock";
    else if (randomNum > 0.33 && randomNum <= 0.66)
        return "paper";
    else if (randomNum > 0.66)
        return "scissors";
}