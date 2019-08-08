import readlineSync from 'readline-sync';
import { car, cdr, cons } from '@hexlet/pairs';

const roundsCounter = 3;

const gameEngine = (getGameData, gameRule) => {
  console.log('Welcome to the Bain Games!');
  const userName = readlineSync.question('May i have you name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  const iter = (counter) => {
    if (counter === roundsCounter) {
      return true;
    }
    const gameData = getGameData();
    console.log(`Question: ${car(gameData)}`);
    const correctAnswer = cdr(gameData);
    const userAnswer = readlineSync.question('Your answer:');
    if (correctAnswer !== userAnswer) {
      return cons(userAnswer, correctAnswer);
    }
    console.log('correct');
    return iter(counter + 1);
  };
  const gameResult = (iter(0));
  if (gameResult === true) {
    console.log(`Congratulations, ${userName}`);
  } else {
    console.log(`${car(gameResult)} is wrong answer. Correct answer was ${cdr(gameResult)}.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export default gameEngine;
