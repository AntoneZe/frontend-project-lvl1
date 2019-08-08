import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const isEven = num => (num % 2 === 0);

const getEvenData = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return cons(question, correctAnswer);
};

const evenTask = 'Answer \'yes\' if number even, otherwise answer \'no\'.';

export default () => gameEngine(getEvenData, evenTask);
