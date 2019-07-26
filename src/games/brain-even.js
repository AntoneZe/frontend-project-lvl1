#!/usr/bin/env node
import { randomInteger, rule } from '../utility';
import gameEngine from '../gameEngine';


export const thisRule = rule('Answer \'yes\' if number even otherwise answer \'no\'.');


export const isEven = (number) => {
  const result = number % 2 !== 0 ? 'no' : 'yes';
  return result;
};

export const brainEven = () => {
  const randomNum = randomInteger(0, 999);
  console.log(`Question: ${randomNum}`);
  const result = isEven(randomNum);
  return result;
};

export default () => gameEngine(thisRule, brainEven);
