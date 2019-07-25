#!/usr/bin/env node
import {randomInteger} from '../utility.js';
import {gameEngine} from '../gameEngine.js';
import {rule} from '../utility.js';

export const thisRule = rule("Find the greatest common divisor of given numbers.");

export const gcd = (x,y) => {
  if (x !== 0) {
    return gcd(y%x,x);
  } else {
    return y;
  }
};

export const brainGcd = () => {
	const randomNumberOne = randomInteger(0,100);
	const randomNumberTwo = randomInteger(0,100);
	const result = gcd(randomNumberOne,randomNumberTwo);
	console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
	return result;
};

export default gameEngine(thisRule,brainGcd);
