'use strict';


// random number
let randomNumber = Math.floor(Math.random() * 20) + 1;
const ourRandomNumber = document.querySelector('.number');

function changeNum(randomNumber){
    ourRandomNumber.textContent = randomNumber;
}

// message
const message = document.querySelector('.message');

// score
const highestScore = document.querySelector('.highscore')
const currScore = document.querySelector('.score')
let score = 20;
let maxScore = 0;


// user input
const userInput = document.querySelector('.guess')


const handleInput = () => {
    let inputNum = Number(userInput.value);
    if(!inputNum){
        message.textContent = "⛔ No Input!";
        return;
    }
    if(inputNum == randomNumber){
        document.body.style.backgroundColor = "#60b347";
        ourRandomNumber.style.width = '30rem'
        message.textContent = "🥳 You guessed it right!";
        changeNum(inputNum);
        maxScore = Math.max(maxScore, score);
        highestScore.textContent = maxScore; 
        
    } else if(inputNum > randomNumber){
        if(score > 1){
            score -= 1;
            currScore.textContent = score;
            message.textContent = "📈 Too high!";
        } else{
            message.textContent = "💥 You lost!";
            currScore.textContent = 0;
        }
    } else{
        if(score > 1){
            score -= 1;
            currScore.textContent = score;
            message.textContent = "📉 Too low!";
        } else{
            message.textContent = "💥 You lost!";
            currScore.textContent = 0;
        }
    }
}



// check button
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', handleInput)


// play again button
const playAgainBtn = document.querySelector('.again')
function handleReload(){
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    currScore.textContent = score;
    message.textContent = "Start guessing...";
    ourRandomNumber.textContent = "?";
    userInput.value = '';
    document.body.style.backgroundColor = '#222';
    ourRandomNumber.style.width = '15rem'
}
playAgainBtn.addEventListener('click', handleReload);



