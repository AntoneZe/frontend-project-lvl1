#!/usr/bin/env node
import {randomInteger} from '../utility.js';
import {gameEngine} from '../gameEngine.js';
import {rule} from '../utility.js';

export const thisRule = rule("What number is missing in the progression?");

export const brainProgression = () => {
	const randomQwestPosition = randomInteger(0,9);
	const massivGen = () => {
		const randomStartNumber = randomInteger(1,100);
		const randomStepValue = randomInteger(1,10);
		var nextArrIndex = randomStartNumber;
		var arr = [randomStartNumber];
			for(var i = 0; i <= 8; i++) {
			nextArrIndex += randomStepValue;
			arr.push(nextArrIndex);
		}
		return arr;
	};
	const raundArray = massivGen();
	const result = raundArray[randomQwestPosition];
	raundArray[randomQwestPosition] = "..";
	console.log(`Question: ${raundArray.join(" ")}`);
	return result;
};

export default gameEngine(thisRule,brainProgression);
