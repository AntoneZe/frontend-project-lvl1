#!/usr/bin/env node
import { randomInteger, rule } from '../utility';
import gameEngine from '../gameEngine';

export const thisRule = rule('What number is missing in the progression?');

export const brainProgression = () => {
  const randomQwestPosition = randomInteger(0, 9);
  const progressionGenerator = () => {
    const randomStartNumber = randomInteger(1, 100);
    const randomStepValue = randomInteger(1, 10);
    let nextProgressionIndex = randomStartNumber;
    const progression = [randomStartNumber];
    for (let i = 0; i <= 8;) {
      nextProgressionIndex += randomStepValue;
      progression.push(nextProgressionIndex);
      i += 1;
    }
    return progression;
  };
  const thisRoundProgression = progressionGenerator();
  const result = thisRoundProgression[randomQwestPosition];
  thisRoundProgression[randomQwestPosition] = '..';
  console.log(`Question: ${thisRoundProgression.join(' ')}`);
  return result;
};

export default () => gameEngine(thisRule, brainProgression);
