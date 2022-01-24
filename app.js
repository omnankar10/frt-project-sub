//const { Chart } = require("chart.js");

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let gamesPlayed = 0;

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function readChoice(alphabet) {
    if (alphabet == "r") return "Rock";
    if (alphabet == "p") return "Paper";
    if (alphabet == "s") return "Scissors";
}

function showuserChoice(userChoice) {
    if (userChoice == "r") {
        document.getElementById("ur").style.display = "block";
        document.getElementById("up").style.display = "none";
        document.getElementById("us").style.display = "none";
    } else if (userChoice == "p") {
        document.getElementById("ur").style.display = "none";
        document.getElementById("up").style.display = "block";
        document.getElementById("us").style.display = "none";
    } else if (userChoice == "s") {
        document.getElementById("ur").style.display = "none";
        document.getElementById("up").style.display = "none";
        document.getElementById("us").style.display = "block";
    }

}

function showcomputerChoice(computerChoice) {
    if (computerChoice == "r") {
        document.getElementById("cr").style.display = "block";
        document.getElementById("cp").style.display = "none";
        document.getElementById("cs").style.display = "none";
    } else if (computerChoice == "p") {
        document.getElementById("cr").style.display = "none";
        document.getElementById("cp").style.display = "block";
        document.getElementById("cs").style.display = "none";
    } else if (computerChoice == "s") {
        document.getElementById("cr").style.display = "none";
        document.getElementById("cp").style.display = "none";
        document.getElementById("cs").style.display = "block";
    }
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = readChoice(userChoice) + " beats " + readChoice(computerChoice) + ". User wins!";
    document.getElementById(userChoice).classList.add("green_glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("green_glow") }, 1000);
    gamesPlayed++;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = readChoice(userChoice) + " loses to " + readChoice(computerChoice) + ". Computer wins!";
    document.getElementById(userChoice).classList.add("red_glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("red_glow") }, 1000);
    gamesPlayed++;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = readChoice(userChoice) + " draws with " + readChoice(computerChoice) + ". It's a draw!";
    gamesPlayed++;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            showuserChoice(userChoice);
            showcomputerChoice(computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            showuserChoice(userChoice);
            showcomputerChoice(computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            showuserChoice(userChoice);
            showcomputerChoice(computerChoice);
            break;
    }

    console.log(userScore, computerScore, gamesPlayed);
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })
}

main();

const stats = document.getElementById("myChart");

console.log(stats);

let statChart = new Chart(stats, {
    type: 'pie',
    data: {
        labels: ["User", "Computer"],
        datasets: [{
            label: 'Game Stats',
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            data: [5, 5],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Game Statistics'
        }
    }
});