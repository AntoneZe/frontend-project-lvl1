import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const isEven = num => (num % 2 !== 0);

const getEvenData = () => {
  const currentNum = generateRandomNumber(1, 100);
  const dataForQuestion = currentNum;
  const isEvenToAnswer = (isEven(currentNum) ? 'no' : 'yes');
  const correctAnswer = isEvenToAnswer;
  return cons(dataForQuestion, correctAnswer);
};

const evenTask = 'Answer \'yes\' if number even, otherwise answer \'no\'.';

export default () => gameEngine(getEvenData, evenTask);
