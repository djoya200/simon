
console.log('simon app.js')
//------------------psuedo code-------------------------//

// =============  DONE ->  ================
// -create buttons for start 
// -create button for directions




// =============  HERE ->  ================
// when game starts:
// -use Math.random to generate random patterns
// -Math.floor(Math.random()*4)

// use the array to tell which square to flash a lighter or darker color 
// the square they are supposed to click 

// when users click the buttons that square flashes and then thier 
// answer is pushed into another array. 

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

// const whenTheGameStarts() => {
// 
// } 

const generateARandomSimonColor = () => {
    var newColor = Math.floor(Math.random() * (4 - 1) ) + 1;
    generatedSimonColors.push(newColor)
}
const gettingColorInput = (i) => {
    console.log("User clicked " + i)
    userSimonColors.push(i)
}
console.log(userSimonColors)
// document.getElementById("one").style = "background-color: white"
// document.getElementById("one").style = "background-color: green"


const flashTheSimonColors = () => {
    console.log('flashTheSimonColors')
    for(let i = 0 ; i <= generatedSimonColors.length -1 ; i++){
        // needs to change from origianl color to white
        // stays white for one second
        // then back to orginal color
        let timeForInt = 1000
        // let howManyTimesInIf = 1

        if(generatedSimonColors[i] == 1){
            console.log('in the green')
            // howManyTimesInIf +=1
            setTimeout(function(){

                document.getElementById("one").style = "background-color: white"

            }, timeForInt * howManyTimesInIf); 

            setTimeout(function(){

                document.getElementById("one").style = "background-color: green" 

            }, timeForInt); 

            //  document.getElementById("one").style = "background-color: green"
        }
        else if(generatedSimonColors[i] == 2){
            console.log('in the red')
           
            setTimeout(function(){
                document.getElementById("two").style = "background-color: white"
                
            }, timeForInt); 
            setTimeout(function(){
                        document.getElementById("two").style = "background-color: red"
                        
            }, timeForInt); 
        }
        else if(generatedSimonColors[i] == 3){
            console.log('in the yellow')

        }
        else if(generatedSimonColors[i] == 4){
            console.log('in the blue')

        }
    }

}


generatedSimonColors = [1, 2]
flashTheSimonColors()
console.log()  
