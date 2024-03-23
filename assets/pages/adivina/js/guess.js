const MAX_NUMBER = 100;
const MIN_NUMBER = 0;
function guessNumber(){
    binarySearch( parseInt(document.getElementById("number").value));
}

function binarySearch(number){
    let guessNumber = 50;
    let higherLimit = MAX_NUMBER;
    let lowerLimit = MIN_NUMBER;
    console.log(number + " guessing " + guessNumber);
    while(guessNumber !== number){
        let higher = confirm(`tu numero es mayor a ${guessNumber}? `);
        console.log(higher);
        if(higher){
            lowerLimit = guessNumber;
            guessNumber += Math.floor((higherLimit - lowerLimit)/2);
        }else{
            higherLimit = guessNumber;
            guessNumber -= Math.floor((higherLimit - lowerLimit)/2);
        }

    }
    alert("Muy fácil tu número es el " + guessNumber);
}
