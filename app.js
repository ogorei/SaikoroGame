'use strict'
//global variables -DOM elements
let scoreEl0=document.querySelector('#score--0');
let scoreEl1=document.querySelector('#score--1');
scoreEl0.textContent='0';
scoreEl1.textContent='0';
let diceEl= document.querySelector('.dice');
diceEl.classList.add('hidden');
let player0Background= document.querySelector('.player--0');
let player1Background= document.querySelector('.player--1');

//players info
let currentScore=0;
let player1CurrentScore= document.getElementById('current--0');
let player2CurrentScore= document.getElementById('current--1');
let activePlayer= 0;
let scores= [0 , 0];
let playing= true;


//buttons and events
const btnNew= document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');

//generate random dice
btnRoll.addEventListener('click', function(){
if(playing){
const dice= Math.trunc(Math.random()*6)+1;
//display number
diceEl.classList.remove('hidden');
diceEl.src=`imgs/Alea_a${dice}.png`;

//check if player got one if true switch to next player

if(dice !== 1){
currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent= currentScore;
} else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
changePlayer();
}

} //switch to next player
}
)

function changePlayer(){
    document.getElementById(`current--${activePlayer}`).textContent= '0';
    activePlayer= activePlayer === 0 ? 1 : 0; 
    currentScore = 0;
    player0Background.classList.toggle('player--active');
    player1Background.classList.toggle('player--active');
};


btnHold.addEventListener('click', function(){
if(playing){
//add current score to player
scores[activePlayer] += currentScore;
let currentActivePlayer= document.getElementById(`score--${activePlayer}`);
currentActivePlayer.textContent= scores[activePlayer];
//finish the game if score is 100p

if(scores[activePlayer] >= 10){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    playing= false;
}
//switch to nextplayer 
changePlayer();
}
});

btnNew.addEventListener('click', function(){
currentScore=0;
player1CurrentScore.textContent='0';
player2CurrentScore.textContent='0';
scoreEl0.textContent='0';
scoreEl1.textContent='0';
activePlayer= 0;
scores= [0 , 0];
document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
})

