#!/usr/bin/env node

// This version uses the Node.js event-driven model.

const readline = require('readline');

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
    return new Promise(function(resolve, reject) {
        let rl = readline.createInterface({
            input:  process.stdin,
            output: process.stdout
        });

        let coord = randomChessCoordinate();
        rl.setPrompt("What color is " + coord + "? ");
        rl.prompt();

        rl.on('line', (guess) => {
            if (guess === "0") {
                rl.close();
                return;
            } else if (guess === chess_square_color(coord)) {
                console.log("Correct!");
            } else {
                console.log("Wrong you fool!");
            }

            // There has to be a better way than repeating code. I just don't
            // know what it is, yet.
            coord = randomChessCoordinate();
            rl.setPrompt("What color is " + coord + "? ");
            rl.prompt();
        }).on('close', () => {
            // I'm not sure what this resolve does...it's not the exit code
            // sent to the shell
            resolve(42);
        });
    });
}

async function run() {
    try {
        let r = await getInput();
    } catch(e) {
        consnole.log("Caught exception: ", e);
    }
}

run();
