import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i + 1) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
  return 'end';
};

const getPrimeData = () => {
  const currentNum = generateRandomNumber(1, 100);
  const dataForQuestion = currentNum;
  const isPrimeToAnswer = (isPrime(currentNum) ? 'yes' : 'no');
  const correctAnswer = isPrimeToAnswer;
  return cons(dataForQuestion, correctAnswer);
};

const primeTask = 'Answer \'yes\' if given number is prime, otherwise answer \'no\'.';

export default () => gameEngine(getPrimeData, primeTask);
