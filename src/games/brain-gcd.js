#!/usr/bin/env node
import { randomInteger, rule } from '../utility';
import gameEngine from '../gameEngine';


export const thisRule = rule('Find the greatest common divisor of given numbers.');

export const isGcd = (x, y) => {
  if (x !== 0) {
    return isGcd(y % x, x);
  }
  return y;
};

export const brainGcd = () => {
  const randomNumberOne = randomInteger(1, 100);
  const randomNumberTwo = randomInteger(1, 100);
  const result = isGcd(randomNumberOne, randomNumberTwo);
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  return Number(result);
};

export default () => gameEngine(thisRule, brainGcd);
