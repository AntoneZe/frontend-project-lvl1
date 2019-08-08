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
  const a = generateRandomNumber(1, 100);
  const b = generateRandomNumber(1, 100);
  const question = `${a} ${b}`;
  const correctAnswer = findGd(a, b);
  return cons(question, String(correctAnswer));
};

const gcdTask = 'Find the greatest common divisior of given numbers';

export default () => gameEngine(getGcdData, gcdTask);
