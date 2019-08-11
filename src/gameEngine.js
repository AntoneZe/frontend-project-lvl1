import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const gameEngine = (getGameData, gameDescription) => {
  console.log('Welcome to the Bain Games!');
  const userName = readlineSync.question('May i have you name? ');
  console.log(`Hello ${userName}`);
  console.log(gameDescription);
  const iter = (counter) => {
    const gameData = getGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}`);
    } else {
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer:');
      if (correctAnswer !== userAnswer) {
        console.log(`${userAnswer} is wrong answer. Correct answer was ${correctAnswer}.`);
        console.log(`Let's try again, ${userName}!`);
      } else {
        console.log('correct');
        iter(counter + 1);
      }
    }
  };
  return iter(0);
};

export default gameEngine;
