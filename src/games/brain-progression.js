import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const brainGameProgressionBody = () => {
  const progressionLength = 10;
  const startProgression = generateRandomNumber(0, 100);
  const diffProgression = generateRandomNumber(1, 10);
  const missingStep = generateRandomNumber(1, 10);
  let dataForQuestion = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingStep) {
      dataForQuestion = `${dataForQuestion} ..`;
    } else {
      dataForQuestion = `${dataForQuestion} ${startProgression + diffProgression * i}`;
    }
  }
  const correctAnswer = `${startProgression + diffProgression * missingStep}`;
  return cons(dataForQuestion, correctAnswer);
};

const brainGameProgressionRule = 'What number is missing in the progression?';

export default () => gameEngine(brainGameProgressionBody, brainGameProgressionRule);
