#!/usr/bin/env node

// This version uses recursion, which apparently is not really the 'node way'.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chess_square_color(coord) {
    const x = coord.charCodeAt(0);
    const y = parseInt(coord[1]);

    return (x + y) & 1 ? "light" : "dark";
}

function randomChessCoordinate() {
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);

    return String.fromCharCode(x + 'a'.charCodeAt(0)) + (y + 1);
}

function getInput() {
    const coord = randomChessCoordinate();
    rl.question("What color is " + coord + "? ", (guess) => {
        if (guess === "0") {
            rl.close();
            process.exit(0);
        } else if (guess === chess_square_color(coord)) {
            console.log("Correct!");
        } else {
            console.log("Wrong you fool!");
        }
        getInput();
    });
}

getInput();
