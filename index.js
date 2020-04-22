// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])

}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter1 is calling the function counterMaker and setting the count. Counter 2 is only acessing the variable count and not incorporating a function, only a variable.
 * 2. Which of the two uses a closure? How can you tell?
 *  counter1, its calling the "count" variable from it's parent which has a wider scope than itself.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 
Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(points){
  let randomPoints = Math.floor(Math.random() * Math.floor(3));
  points = randomPoints;
  return points;
}
/* Task 3: finalScore()
Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example, 
finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 

function finalScore(inning, inningNum){
  let homeScore = 0 + inning(inningNum);  
  let awayScore = 0 + inning(inningNum)
  return homeScore, awayScore;

}  

console.log(finalScore(inning, 9));

// let asd = finalScore(3);
// console.log(asd)
/* Task 4: 
Create a function called `scoreboard` that accepts the following parameters: 
(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings
and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
function getInningScore(cb) {
    return cb();
  }

function scoreboard(inning, getInningScore, inningNum) {
    const score = {
      "Home": 0,
      "Away": 0
}
for (let i = 0; i < inningNum; i++) {
  // Setting Scores
  let scoreHome = getInningScore(inning);
  let scoreAway = getInningScore(inning);
  //Adding Scores
  score.Home += scoreHome;
  score.Away += scoreAway;
  //Printing out scores in console
  console.log(`Inning Numer: ${i + 1}: Home Score: ${scoreHome} - Away Score: ${scoreAway}`);
}
//Final Score Print
console.log(`Final Score: ${score.Away} - ${score.Home}`);
}

scoreboard(getInningScore, inning, 9);