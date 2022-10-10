function getRandom() {
    var rand = Math.random();
    rand = Math.floor(rand * 6) + 1;
    return rand;
}

var player1 = getRandom();
var player2 = getRandom();

console.log(player1 + " " + player2);

document.querySelector("#player-1").setAttribute("src", ("images/dice" + player1 + ".png"));
document.querySelector("#player-2").setAttribute("src", ("images/dice" + player2 + ".png"));

if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}