import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeData = () => {
  const question = generateRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const primeTask = 'Answer \'yes\' if given number is prime, otherwise answer \'no\'.';

export default () => gameEngine(getPrimeData, primeTask);
