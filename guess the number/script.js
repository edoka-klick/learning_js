'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNumber;


let score = 20;
let highscore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(typeof guess, typeof secretNumber);

    ///IF NO NUMBER 
    if( !guess ){
        displayMessage('No number');
        ///document.querySelector('.message').textContent = 'No number'

    ////IF CORRECT GUESS
    } else if ( guess === secretNumber ){
        displayMessage('Correct Number');
        //document.querySelector('.message').textContent = 'Correct number'
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        ///IF SCORE IF HIGHER THAN HIGHSCORE
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    } 

    ///IF THE GUESS IS WRONG :::::::::

    else if(guess !== secretNumber){
        if(score > 0){
            if(guess - secretNumber === 1){
                displayMessage('You are close. It is a bit lower');
            } else if (secretNumber - guess === 1){
                displayMessage('You are close. It is a bit higher');
            } else {
                displayMessage(guess > secretNumber ? "Too high" : "Too low");
            }

            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
           displayMessage('You lost')
        }

        
    }
    
    // ///IF GUESS HIGHER THAN NUMBER
    // else if ( guess > secretNumber){
    //     if(score > 0){
    //         document.querySelector('.message').textContent = 'Too high'
    //         score = score - 1;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost'
    //     }
        
    // ///IF GUESS LOWER THAN SECRET
    // } else if ( guess < secretNumber){
    //     if(score > 0){
    //         document.querySelector('.message').textContent = 'Too low'
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost'
    //     }
        
    // }

});


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = 'black';
})

  