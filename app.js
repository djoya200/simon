
console.log('simon app.js')
//------------------psuedo code-------------------------//

// =============  DONE ->  ================
// -create buttons for start 
// -create button for directions

// when game starts:
// -use Math.random to generate random patterns
// -Math.floor(Math.random()*4)

// use the array to tell which square to flash a lighter or darker color 
// the square they are supposed to click 

// when users click the buttons that square flashes and then thier 
// answer is pushed into another array. 

// =============  HERE ->  ================

// -set conditionals to see  if they are ==== to 
// eachother then they proceed to the next level

// popup box says: 
// -create pop up windows for when they proceed to the next level 
// -have baloons or confetti for when they win

// add one more color/number to the game array 

// after that show the flashes again and check the answers users click again. 

// -create pop up window for when they lose

// -use .push to push random number into an array from Math.floor
// -use .push to push answers from DOM into an array

// -possibly create two backgrounds one for knights and a dragon 
// -one for princess finding her rabbit
// -make avitars move when they recieve points

// ====================================================
// This JavaScript function always returns a random number between min and max (both included):
// W3Schools
// Math.floor(Math.random() * (max - min + 1) ) + min;
var generatedSimonColors = []
var userSimonColors = []
var myVar = ''

const whenTheGameStarts = () => {
    generateARandomSimonColor() 
    flashTheSimonColors()
} 
const checkingTheColors = () => {
    console.log("checkingTheColors")
    console.log(userSimonColors)
    console.log(generatedSimonColors)
    // take these two lines out ^

    if(userSimonColors.length  === generatedSimonColors.length){
        console.log(userSimonColors.length + " length")
    let  isItWrong = false
        for(let i = 0; i < generatedSimonColors.length; i++){
           
            if(userSimonColors[i] !== generatedSimonColors[i]){
                isItWrong = true
            }
        }

console.log("isItWrong ==  " + isItWrong)
       if(isItWrong === false){ 
        userSimonColors = []
        generateARandomSimonColor()
        flashTheSimonColors()
       }
    //     else {
    //        make an alert that says "you lose"
    //    }
    }
}
const generateARandomSimonColor = () => {
    var newColor = Math.floor(Math.random() * (4 - 1)) + 1;
    generatedSimonColors.push(newColor)
}
const gettingColorInput = (i) => {
    console.log("User clicked " + i)
    userSimonColors.push(i)
    checkingTheColors()
}

// document.getElementById("one").style = "background-color: white"
// document.getElementById("one").style = "background-color: green"


const flashTheSimonColors = () => {
    
    for (let i = 0; i <= generatedSimonColors.length - 1; i++) {
        // needs to change from origianl color to white
        // stays white for one second
        // then back to orginal color
        let timeForInt = 1000
        // let howManyTimesInIf = 1

        if (generatedSimonColors[i] == 1) {
            

            setTimeout(function () {

                document.getElementById("one").style = "background-color: white";
                
            }, (((i + 1) * 2) - 1) * 1000);

            setTimeout(function () {

                document.getElementById("one").style = "background-color: green";
                
            }, ( (i + 1) * 2 * 1000) );

            //  document.getElementById("one").style = "background-color: green"
        }
        else if (generatedSimonColors[i] == 2) {
            

            setTimeout(function () {
                document.getElementById("two").style = "background-color: white"
                
            }, (((i + 1) * 2) - 1) * 1000);
            setTimeout(function () {
                document.getElementById("two").style = "background-color: red"
                
            }, ( (i + 1) * 2 * 1000) );
        }
        else if (generatedSimonColors[i] == 3) {
            setTimeout(function () {

                document.getElementById("three").style = "background-color: white";
                
            }, (((i + 1) * 2) - 1) * 1000);

            setTimeout(function () {

                document.getElementById("three").style = "background-color: yellow";
                
            }, ( (i + 1) * 2 * 1000) );

        }
        else if (generatedSimonColors[i] == 4) {
            

            setTimeout(function () {

                document.getElementById("four").style = "background-color: white";
                
            }, (((i + 1) * 2) - 1) * 1000);

            setTimeout(function () {

                document.getElementById("four").style = "background-color: blue";
                
            }, ( (i + 1) * 2 * 1000) );

        }
    }

}



