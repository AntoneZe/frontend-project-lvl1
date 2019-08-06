import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;
const numberOfFirsRound = 1;

const isPlayerWin = (round, data) => {
  const getGameData = data();
  const corectAnswer = cdr(getGameData);
  console.log(`Question: ${car(getGameData)}`);
  const userAnswer = readlineSync.question('Your answer:');
  if (round === numberOfRounds) {
    return true;
  }
  if (corectAnswer === userAnswer) {
    console.log('correct');
    return isPlayerWin(round + 1, data);
  }
  console.log(`${userAnswer} is wrong answer. Correct answer was ${corectAnswer}.`);
  return false;
};


const gameEngine = (gameData, gameRule) => {
  console.log('Welcome to the Bain Games!');
  const userName = readlineSync.question('May i have you name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  if (isPlayerWin(numberOfFirsRound, gameData)) {
    console.log(`Congratulations, ${userName}`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default gameEngine;
