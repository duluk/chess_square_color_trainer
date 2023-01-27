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

let currentCoord;

function clearResult() {
//    document.querySelector("#result").innerHTML = "";
//    document.querySelector("#result").style.display = 'none';
}

function getRandomCoord() {
    currentCoord = randomChessCoordinate();
    document.querySelector("#coordinate").innerHTML = "What color is " + currentCoord + "?";
    document.querySelector("#guess").value = "";
    document.querySelector("#guess").select();
}

function chessGuess() {
    const guess = document.querySelector("#guess").value;
    var result = "";

    if (guess.toLowerCase() === chessSquareColor(currentCoord)) {
        //document.querySelector("#result").innerHTML = "Correct!";
        result = "Correct!";
    } else {
        //document.querySelector("#result").innerHTML = "Wrong you fool!";
        result = "Wrong you fool!";
    }

    alert(result);
    getRandomCoord();
}

getRandomCoord();
