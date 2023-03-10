// Hmmmm...global. Probably better way.
let currentCoord;

function chessSquareColor(coord) {
    const x = coord.charCodeAt(0);
    const y = parseInt(coord[1]);

    return (x + y) & 1 ? "light" : "dark";
}

function randomChessCoordinate() {
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);

    return String.fromCharCode(x + 'a'.charCodeAt(0)) + (y + 1);
}

function returnButtons() {
    return document.querySelectorAll('input[name="guess"]');
}

function clearButtons() {
    // Clear out the previous selection
    const radioButtons = returnButtons();
    for (const radioButton of radioButtons) {
        radioButton.checked = false;
    }
}

function getRandomCoord() {
    currentCoord = randomChessCoordinate();
    document.querySelector("#coordinate").innerHTML = "What color is " + currentCoord + "?";

    clearButtons();
}

function chessGuess() {
    let guess = "";
    let result = "";

    const radioButtons = returnButtons();
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            guess = radioButton.value;
            break;
        }
    }

    if (guess === chessSquareColor(currentCoord)) {
        result = "Correct!";
    } else {
        result = "Wrong you fool!";
    }

    alert(result);
    getRandomCoord();
}

getRandomCoord();
