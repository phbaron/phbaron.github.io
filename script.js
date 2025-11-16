function newgame() {

    var player = prompt("What do you choose, rock, paper or scissors?");
    var options = ['rock','paper','scissors'];
    var computer = options[Math.floor(Math.random() * 3)];

    document.getElementById("computer-choice").innerText = "Computer chose: " + computer;    

    if (player === computer) {
        result = "Draw!";
    }
    else if (player === "rock") {
        if (computer === "scissors") {
            result = "You win!";
        } else {
            result = "You lose!";
        }
    }
    else if (player === "paper") {
        if (computer === "rock") {
            result = "You win!";
        } else {
            result = "You lose!";
        }
    }
    else if (player === "scissors") {
        if (computer === "paper") {
            result = "You win!";
        } else {
            result = "You lose!";
        }
    }
    else {
        result = "That's not an option!";
    }

    document.getElementById("result").innerText = result;
}