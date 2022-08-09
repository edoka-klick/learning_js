'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer, gameIsOn;



const initialValues = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameIsOn = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

function switchPlayers(){
    document.getElementById('current--' + activePlayer).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

initialValues();



btnRoll.addEventListener('click', function(){
    if(gameIsOn){
        ///Generating the dice
        const dice = Math.trunc(Math.random()*6)+1;
        console.log(dice);

        ///Displaying the dice
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice/dice-' + dice + '.png';
        

        //Check for the rule 1
        if(dice !== 1){
            //Add to current score
            currentScore = currentScore + dice;
            document.getElementById('current--' + activePlayer).textContent = currentScore;

        } else {
            //Switch to the next player
            switchPlayers();

        }
    }
    
});

btnHold.addEventListener('click', function(){
    if(gameIsOn){
        //Add current score to the player score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        //Check if score 100
        //Finish the game; 
        if(scores[activePlayer] >= 100){
            diceEl.classList.add('hidden');
            gameIsOn = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //Switch to the next player
            switchPlayers()
        }
    }
    
});


btnNew.addEventListener('click', initialValues);


