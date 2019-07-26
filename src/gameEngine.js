import readlineSync from 'readline-sync';
import { getName } from './utility';

const gameEngine = (thisRule, funct) => {
  const userName = getName();
  console.log(thisRule);
  const iter = (counter) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const round = funct;
    const result = round();
    const answer = readlineSync.question('Your answer:');
    if (String(result) === answer) {
      console.log('correct');
      return iter(counter + 1);
    }
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
  };
  return iter(0);
};

export default gameEngine;
