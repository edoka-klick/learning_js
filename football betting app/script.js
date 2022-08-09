'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Gnarby', 'Hazard',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


////SOLUTION

///Challenges

console.log('-----------Part 1 Challenges-------------');
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals =  function(...players){
  console.log(`${players.length} goals were scored.`)
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);


team1 > team2 && console.log('Team 1 is more likely to win');
team1 < team2 && console.log('Team 2 is more likely to win');


console.log('-----------Part 2-------------');
///Challenge 2

/*
1) Loop over game.scored and print each player name 
to the console along with the goal number
*/

// const keys = Object.keys(game.scored);
// console.log(keys);

// const values = Object.values(game.scored);
// console.log(values);


console.log('-----------Challenge 1-------------');
const entries = Object.entries(game.scored);
console.log(entries);
for(const [key, value] of entries){
  console.log('Goal ' + (Number(key) + 1) + ': ' + value);
}

/*
2) Calc the average of the odds of the game
*/

console.log('-----------Challenge 2-------------');
function calcAvg(odds){
  let sum = 0;
  for(const odd of odds){
    sum += odd;
    ///console.log(odd);
  }
  return sum/odds.length;
}

const [...arr] = Object.values(game.odds);
console.log(calcAvg(arr));

/**
 * 3)
 * Print the 3 odds to the console but in a nice formated way
 * 
 * Odd of victory ${Bayern Munich} //team1 : 1.33
 * Odd of draw: 3.25
 * Odd of victory ${team2} : 6.5
 */

console.log('-----------Challenge 3-------------');

const entriesGame = Object.entries(game);
console.log(entriesGame);

const team1name = game.team1;
//console.log('Team1: ' + team1name);

const team2name = game.team2;
//console.log('Team2: ' + team2name);


const entriesOdds = Object.entries(game.odds);
//console.log(entriesOdds);

for(const [key, value] of entriesOdds){
  //console.log(key, value);
  let teamName =  key === 'team1' ? team1name : team2name;
  let res = 'Odd of' + 
  ((key === 'team1' || key === 'team2') ? ' victory ' : ' draw')
  + (key !== 'x' ? teamName  + ': ' + value : ': ' + value);
  console.log(res);
}

console.log('-------------------Bonus------------------');



let scores = [];

function findRepeatingValues(arr, value){
  var counter = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == value){
      counter++;
    }
  }
  return counter;
}

function fillScoresWithValues(){
  const goals = game.scored;
  ///console.log(goals);
  let allGoals = removeDuplicates(goals);
  ///console.log('All goals ' + allGoals);
  for(let item of allGoals){
    let goal = findRepeatingValues(goals, item);
    scores.push([goal, item]);
  }
  console.log(scores);
}

fillScoresWithValues();

function removeDuplicates(data){
  let unique = [];
  data.forEach(el => {
    if(!unique.includes(el)){
      unique.push(el);
    }
  });
  //console.log(unique);
  return unique;
}


console.log('------------Part 3--------------');

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//console.log(gameEvents);
const arrEvents = [];
for(const item of gameEvents){
  //console.log(item[1]);
  arrEvents.push(item[1]);
}

//console.log(arrEvents)

const events = new Set(arrEvents);
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

for(let item of gameEvents){
  const res = (item[0] >= 0 && item[0] <= 45) ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(
     res + item[0] + ': ' + item[1]
  )
}

 