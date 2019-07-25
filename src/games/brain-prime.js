#!/usr/bin/env node
import {randomInteger} from '../utility.js';
import {gameEngine} from '../gameEngine.js';
import {rule} from '../utility.js';

export const thisRule = rule("Answer \"yes\" if given number is prime. Otherwise answer \"no\"");


export const isPrime = num => {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)  {
        if(num % i === 0) {
			return false;
		}
		return num > 1;
	}
};

export const brainPrime = () => {
	const randomNumber = randomInteger(1,100);
	console.log(`Question: ${randomNumber}`);
	const result = isPrime(randomNumber) ? "yes" : "no";
	return result;
 };

export default gameEngine(thisRule,brainPrime);
