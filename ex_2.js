function guessNum() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    while (true) {
        const guess = Number(prompt("Guess a number between 1 and 100,"));
        attempts++;

        if (guess === randomNumber) {
            alert("Correct! It took you ${attempts} attempts.");
            break;
        } else if (guess > randomNumber) {
            alert("Too high!");
        } else if (guess < randomNumber) {
            alert("Too low!");
        }
    }
}

guessNum();
