import readlineSync from 'readline-sync';
import {questionName} from './utility.js';

export const gameEngine = (thisRule,funct) => {
  const userName = questionName();
console.log(thisRule);
  const iter = (counter) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
      const raund = funct;
      const result = raund();
      const answer = readlineSync.question('Your answer:');
      if (result == answer) {
        console.log("correct")
        return iter(counter + 1);
      } else {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
      }
  }
return iter(0)
};
