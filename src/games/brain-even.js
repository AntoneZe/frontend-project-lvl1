import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';


const isEven = num => ((num % 2 !== 0) ? 'no' : 'yes');

const brainGameEvenBody = () => {
  const currentNum = generateRandomNumber(1, 100);
  const dataForQuestion = `${currentNum}`;
  const correctAnswer = isEven(currentNum);
  return cons(dataForQuestion, correctAnswer);
};

const brainGameEvenRule = 'Answer \'yes\' if number even, otherwise answer \'no\'.';

export default () => gameEngine(brainGameEvenBody, brainGameEvenRule);
