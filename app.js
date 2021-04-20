
console.log('simon app.js')

var generatedSimonColors = []
var userSimonColors = []
var myVar = ''

const whenTheGameStarts = () => {
    generateARandomSimonColor()
    flashTheSimonColors()
}
const checkingTheColors = () => {
    if (userSimonColors.length === generatedSimonColors.length) {
        console.log(userSimonColors.length + " length")
        let isItWrong = false
        for (let i = 0; i < generatedSimonColors.length; i++) {
            if (userSimonColors[i] !== generatedSimonColors[i]) {
                isItWrong = true
            }
        }
        console.log("isItWrong ==  " + isItWrong)
        if (isItWrong === false) {
            document.getElementById("level").innerHTML = "Level: " + generatedSimonColors.length
            document.getElementById("points").innerHTML = "Points: " + generatedSimonColors.length * 100
            userSimonColors = []
            generateARandomSimonColor()
            flashTheSimonColors()
            if (generatedSimonColors.length == 16) {
                modalWinOn()
            } else {
                // window.alert("Congratulations! Proceed to the next level.")
            }
        } else {
            modalLoseOn()
        }
    }
}
const generateARandomSimonColor = () => {
    var newColor = Math.floor(Math.random() * (4 - 1)) + 1;
    generatedSimonColors.push(newColor)
}
const gettingColorInput = (i) => {
    if (i == 1) {
        setTimeout(function () {
            document.getElementById("one").style = "background-color: white"
        }, 500);
        setTimeout(function () {
            document.getElementById("one").style = "background-color: #a3e048"
            userSimonColors.push(i)
            checkingTheColors()
        }, 1000);
    } else if (i == 2) {
        setTimeout(function () {
            document.getElementById("two").style = "background-color: white"
        }, 500);
        setTimeout(function () {
            document.getElementById("two").style = "background-color: #e6261f"
            userSimonColors.push(i)
            checkingTheColors()
        }, 1000);
    } else if (i == 3) {
        setTimeout(function () {
            document.getElementById("three").style = "background-color: white"
        }, 500);
        setTimeout(function () {
            document.getElementById("three").style = "background-color: #f7d038"
            userSimonColors.push(i)
            checkingTheColors()
        }, 1000);
    } else if (i == 4) {
        setTimeout(function () {
            document.getElementById("four").style = "background-color: white"
        }, 500);
        setTimeout(function () {
            document.getElementById("four").style = "background-color: #4355db"
            userSimonColors.push(i)
            checkingTheColors()
        }, 1000);
    }
}
const flashTheSimonColors = () => {

    for (let i = 0; i <= generatedSimonColors.length - 1; i++) {

        if (generatedSimonColors[i] == 1) {
            setTimeout(function () {
                document.getElementById("one").style = "background-color: white";

            }, (((i + 1) * 2) - 1) * 1000);

            setTimeout(function () {

                document.getElementById("one").style = "background-color: #a3e048";

            }, ((i + 1) * 2 * 1000));

        }
        else if (generatedSimonColors[i] == 2) {


            setTimeout(function () {
                document.getElementById("two").style = "background-color: white"

            }, (((i + 1) * 2) - 1) * 1000);
            setTimeout(function () {
                document.getElementById("two").style = "background-color: #e6261f"

            }, ((i + 1) * 2 * 1000));
        }
        else if (generatedSimonColors[i] == 3) {
            setTimeout(function () {

                document.getElementById("three").style = "background-color: white";

            }, (((i + 1) * 2) - 1) * 1000);

            setTimeout(function () {

                document.getElementById("three").style = "background-color: #f7d038";

            }, ((i + 1) * 2 * 1000));

        }
        else if (generatedSimonColors[i] == 4) {


            setTimeout(function () {

                document.getElementById("four").style = "background-color: white";

            }, (((i + 1) * 2) - 1) * 1000);

            setTimeout(function () {

                document.getElementById("four").style = "background-color: #4355db";

            }, ((i + 1) * 2 * 1000));

        }
    }

}

// ----------------------directions modal---------------------------

var modal = document.getElementById("directionsModal");
var btn = document.getElementById("directionsButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ----------------------losing modal---------------------------
var losingModal = document.getElementById("losingModal");
var LosingSpan = document.getElementsByClassName("close")[1];

LosingSpan.onclick = function () {
    losingModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == losingModal) {
        losingModal.style.display = "none";
    }
}
modalLoseOn = () => {
    document.getElementById("losingModal").style.display = "block"
}

// ----------------reset button------------
const clickedTheResetButton = () => {
    generatedSimonColors = []
    userSimonColors = []
    document.getElementById("level").innerHTML = "Level: "
    document.getElementById("points").innerHTML = "Points: "
}

// ----------------------winning modal---------------------------
var winningModal = document.getElementById("winningModal");
var winningSpan = document.getElementsByClassName("close")[2];

winningSpan.onclick = function () {
    winningModal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == winningModal) {
        winningModal.style.display = "none";
    }
}
modalWinOn = () => {
    document.getElementById("winningModal").style.display = "block"
}