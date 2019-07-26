#!/usr/bin/env node
import { randomInteger, rule } from '../utility';
import gameEngine from '../gameEngine';

export const thisRule = rule('What is the result of the expression?');

export const randomOperators = () => {
  const substraction = 1;
  const addition = 2;
  const multiplication = 3;
  switch (randomInteger(substraction, multiplication)) {
    case substraction:
      return '-';
    case addition:
      return '+';
    case multiplication:
      return '*';
    default:
      return console.log('Woops');
  }
};

export const brainCalc = () => {
  const randomNumberOne = randomInteger(1, 100);
  const randomNumberTwo = randomInteger(1, 100);
  switch (randomOperators()) {
    case '+':
      console.log(`Question: ${randomNumberOne} + ${randomNumberTwo}`);
      return randomNumberOne + randomNumberTwo;
    case '-':
      console.log(`Question: ${randomNumberOne} - ${randomNumberTwo}`);
      return randomNumberOne - randomNumberTwo;
    case '*':
      console.log(`Question: ${randomNumberOne} * ${randomNumberTwo}`);
      return randomNumberOne * randomNumberTwo;
    default:
      return console.log('Woops');
  }
};

export default () => gameEngine(thisRule, brainCalc);
