#!/usr/bin/env node
import {randomInteger} from '../utility.js';
import {gameEngine} from '../gameEngine.js';
import {rule} from '../utility.js';

export const thisRule = rule("Answer \"yes\" if number even otherwise answer \"no\".");


export const evenCheck = (number) => {
  const result = number%2 !==0? "no":"yes";
  return result;
};

export const brainEven = () => {
  const randomNum = randomInteger(0,999);
  console.log(`Question: ${randomNum}`);
  const result = evenCheck(randomNum)
  return result;
};

export default gameEngine(thisRule,brainEven);
