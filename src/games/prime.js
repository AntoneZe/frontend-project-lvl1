import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const isPrime = (num) => {
  let result = null;
  for (let i = 2, s = Math.sqrt(num); i <= s; i + 1) {
    if (num % i === 0) {
      result = true;
      break;
    }
    result = false;
    break;
  }
  return result;
};

const getPrimeData = () => {
  const question = generateRandomNumber(1, 100);
  const isPrimeToAnswer = (isPrime(question) ? 'yes' : 'no');
  const correctAnswer = isPrimeToAnswer;
  return cons(question, correctAnswer);
};

const primeTask = 'Answer \'yes\' if given number is prime, otherwise answer \'no\'.';

export default () => gameEngine(getPrimeData, primeTask);
