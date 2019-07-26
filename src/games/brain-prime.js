#!/usr/bin/env node
import { randomInteger, rule } from '../utility';
import gameEngine from '../gameEngine';

export const thisRule = rule('Answer "yes" if given number is prime. Otherwise answer "no"');


export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i + 1) {
    if (num % i === 0) {
      return false;
    }
    return num > 1;
  }
  return 'end';
};

export const brainPrime = () => {
  const randomNumber = randomInteger(1, 100);
  console.log(`Question: ${randomNumber}`);
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return result;
};

export default () => gameEngine(thisRule, brainPrime);
