//All javascript / jQuery files
var colors = [];
var squares;
var colorDisplay = document.getElementById("colorDisplay");
var ansStatus = document.querySelector("#ansStatus");
var resetBTN = document.querySelector("#reset");
var easyBTN = document.querySelector("#easy");
var mediumBTN = document.querySelector("#medium");
var hardBTN = document.querySelector("#hard");
var boxWraper = document.querySelector("#boxWraper");
var pickedColor;
var boxNum = 0;
var box = "<div class=\"square\"></div>";

easyBTN.addEventListener("click", function () {
    easyBTN.classList.add("selected");
    mediumBTN.classList.remove("selected");
    hardBTN.classList.remove("selected");
    boxNum = 3;
    boxWraper.innerHTML = "";
    for (var i = 0; i < boxNum; i++) {
        boxWraper.innerHTML += box;
    }
    squares = document.querySelectorAll(".square");
    init();
});

mediumBTN.addEventListener("click", function () {
    easyBTN.classList.remove("selected");
    mediumBTN.classList.add("selected");
    hardBTN.classList.remove("selected");
    boxNum = 6;
    boxWraper.innerHTML = "";
    for (var i = 0; i < boxNum; i++) {
        boxWraper.innerHTML += box;
    }
    squares = document.querySelectorAll(".square");
    init();
});

hardBTN.addEventListener("click", function () {
    easyBTN.classList.remove("selected");
    mediumBTN.classList.remove("selected");
    hardBTN.classList.add("selected");
    boxNum = 9;
    boxWraper.innerHTML = "";
    for (var i = 0; i < boxNum; i++) {
        boxWraper.innerHTML += box;
    }
    squares = document.querySelectorAll(".square");
    init();
});

//init();
resetBTN.addEventListener("click", function () {
    if (boxNum === 0) {
        alert("Please select your game level!\n=>EASY\n=>MEDIUM\n=>HARD");
    } else {
        init();
    }
});

function init() {
    resetBTN.textContent = "Reset!";
    colors = generateRandomColor(boxNum);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    ansStatus.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        //Add colors to the square
        squares[i].style.backgroundColor = colors[i];

        //Add listeners to square
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                ansStatus.textContent = "Correct!";
                ansStatus.style.backgroundColor = "#2ecc71";
                ansStatus.style.color = "#ffffff";
                changedColor(clickedColor);
                resetBTN.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "white";
                ansStatus.textContent = "Try Again!";
                ansStatus.style.backgroundColor = "#e74c3c";
                ansStatus.style.color = "#ffffff";
                resetBTN.textContent = "Reset!";
            }
        });
    }
}



function changedColor(color) {
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomPos = Math.floor(Math.random() * colors.length);
    return colors[randomPos];
}

function generateRandomColor(num) {
    var _colors = [];
    for (var i = 0; i < num; i++) {
        _colors.push(randomColor());
    }
    return _colors;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
