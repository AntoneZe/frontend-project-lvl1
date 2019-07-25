#!/usr/bin/env node
import {randomInteger} from '../utility.js';
import {rule} from '../utility.js';
import {gameEngine} from '../gameEngine.js';

export const thisRule = rule("What is the result of the expression?");

export const randomOperators = () => {
const substraction = 1;
const addition = 2;
const multiplication = 3;
switch (randomInteger(substraction,multiplication)) {
  case substraction:
    return "-";
  case addition:
    return "+";
  case multiplication:
    return "*";
  default:
    return console.log("Woops");
		}
};

export const brainCalc = () => {
  const randomNumberOne = randomInteger(1,100);
	const randomNumberTwo = randomInteger(1,100);
  switch (randomOperators()) {
	case "+":
  console.log(`Question: ${randomNumberOne} + ${randomNumberTwo}`);
	return randomNumberOne + randomNumberTwo;
	case "-":
  console.log(`Question: ${randomNumberOne} - ${randomNumberTwo}`);
	return randomNumberOne - randomNumberTwo;
	case "*":
  console.log(`Question: ${randomNumberOne} * ${randomNumberTwo}`);
	return randomNumberOne * randomNumberTwo;
	}
};

export default gameEngine(thisRule,brainCalc);
