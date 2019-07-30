import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const primeCheck = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i + 1) {
    if (num % i === 0) {
      return 'no';
    }
    return 'yes';
  }
  return 'end';
};

const brainGamePrimeBody = () => {
  const currentNum = generateRandomNumber(1, 100);
  const dataForQuestion = `${currentNum}`;
  const correctAnswer = primeCheck(currentNum);
  return cons(dataForQuestion, correctAnswer);
};

const brainGamePrimeRule = 'Answer \'yes\' if given number is prime, otherwise answer \'no\'.';

export default () => gameEngine(brainGamePrimeBody, brainGamePrimeRule);
