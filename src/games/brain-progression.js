#!/usr/bin/env node
import {randomInteger} from '../utility.js';
import {gameEngine} from '../gameEngine.js';
import {rule} from '../utility.js';

export const thisRule = rule("What number is missing in the progression?");

export const brainProgression = () => {
	const randomQwestPosition = randomInteger(0,9);
	const progressionGenerator = () => {
		const randomStartNumber = randomInteger(1,100);
		const randomStepValue = randomInteger(1,10);
		var nextProgressionIndex = randomStartNumber;
		var progression = [randomStartNumber];
			for(var i = 0; i <= 8; i++) {
			nextProgressionIndex += randomStepValue;
			progression.push(nextProgressionIndex);
		}
		return progression;
	};
	const thisRoundProgression = progressionGenerator();
	const result = thisRoundProgression[randomQwestPosition];
	thisRoundProgression[randomQwestPosition] = "..";
	console.log(`Question: ${thisRoundProgression.join(" ")}`);
	return result;
};

export default gameEngine(thisRule,brainProgression);
