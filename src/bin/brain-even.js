#!/usr/bin/env node
import {randomInteger} from '../utility.js';

export const brainEven = () => {
const randomNum = randomInteger(0,999);
console.log(`Question: ${randomNum}`);
const result = randomNum%2 !== 0? "no":"yes";
return result;
};
