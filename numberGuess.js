let correctNumber = Math.floor(Math.random() * 10) + 1;

let guess = prompt("3:");

guess = Number(3);

while (guess !== correctNumber) {
    if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    }
    
    guess = Number(prompt("Guess again:"));
}

console.log("Correct!");