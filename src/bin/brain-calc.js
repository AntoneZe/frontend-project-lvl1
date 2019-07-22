#!/usr/bin/env node
import {randomInteger} from '../utility.js';

export const randomOperators = () => {
switch (randomInteger(1,3)) {
  case 1:
    return "-";
  case 2:
    return "+";
  case 3:
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
