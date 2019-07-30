import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameEngine = (gameBody, gameRule) => {
  console.log('Welcome to the Bain Games!');
  const userName = readlineSync.question('May i have you name? ');
  console.log(`Hello ${userName}`);
  console.log(gameRule);
  const iter = (counter) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}`);
    }
    const roundBody = gameBody();
    console.log(`Question: ${car(roundBody)}`);
    const corectAnswer = cdr(roundBody);
    const userAnswer = readlineSync.question('Your answer:');
    if (String(corectAnswer) === userAnswer) {
      console.log('correct');
      return iter(counter + 1);
    }
    console.log(`${userAnswer} is wrong answer. Correct answer was ${corectAnswer}. \nLet's try again, ${userName}!`);
    return false;
  };
  return iter(0);
};

export default gameEngine;
