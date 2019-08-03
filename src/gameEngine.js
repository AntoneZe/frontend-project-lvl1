import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';


const numberOfRounds = 3;

const gameEngine = (gameData, gameRule) => {
  console.log('Welcome to the Bain Games!');
  const userName = readlineSync.question('May i have you name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  const iter = (counter) => {
    if (counter === numberOfRounds) {
      return console.log(`Congratulations, ${userName}`);
    }
    const roundData = gameData();
    console.log(`Question: ${car(roundData)}`);
    const corectAnswer = cdr(roundData);
    const userAnswer = readlineSync.question('Your answer:');
    if (corectAnswer === userAnswer) {
      console.log('correct');
      return iter(counter + 1);
    }
    console.log(`${userAnswer} is wrong answer. Correct answer was ${corectAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  };
  return iter(0);
};

export default gameEngine;
