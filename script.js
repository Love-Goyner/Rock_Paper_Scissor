const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#mssg");
const restart = document.querySelector(".restart");

let userScore = 0;
let compScore = 0;
const userScoreShow = document.querySelector("#user-score");
const compScoreShow = document.querySelector("#comp-score");

restart.addEventListener("click", ()=>{
    userScore = 0;
    compScore = 0;
    userScoreShow.innerText = userScore;
    compScoreShow.innerText = compScore;
    mssg.innerText = "Play First Move";
    mssg.style.backgroundColor = "#081b31"
})

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = ()=>{
    mssg.innerText = "The Game is Drawn, Play Again";
    mssg.style.backgroundColor = "#081b31"
}

const showWinner = (playerWin,userChoice, compChoice)=>{
    if(playerWin){
        userScore++;
        userScoreShow.innerText = userScore;
        mssg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScoreShow.innerText = compScore;
        mssg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        mssg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let playerWin = true;
        if(userChoice === "rock"){
            playerWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            playerWin = compChoice === "scissors" ? false : true;
        }
        else{
            playerWin = compChoice === "rock" ? false : true;
        }
        showWinner(playerWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})