import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const findGd = (x, y) => {
  if (x !== 0) {
    return findGd(y % x, x);
  }
  return y;
};

const getGcdData = () => {
  const firstNum = generateRandomNumber(1, 100);
  const secondNum = generateRandomNumber(1, 100);
  const dataForQuestion = `${firstNum} ${secondNum}`;
  const correctAnswer = findGd(firstNum, secondNum);
  return cons(dataForQuestion, String(correctAnswer));
};

const gcdTask = 'Find the greatest common divisior of given numbers';

export default () => gameEngine(getGcdData, gcdTask);
