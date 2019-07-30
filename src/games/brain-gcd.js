import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const gcdCheck = (x, y) => {
  if (x !== 0) {
    return gcdCheck(y % x, x);
  }
  return y;
};

const brainGameGcdBody = () => {
  const firstNum = generateRandomNumber(1, 100);
  const secondNum = generateRandomNumber(1, 100);
  const dataForQuestion = `${firstNum} ${secondNum}`;
  const correctAnswer = gcdCheck(firstNum, secondNum);
  return cons(dataForQuestion, correctAnswer);
};

const brainGameGcdRule = 'Find the greatest common divisior of given numbers';

export default () => gameEngine(brainGameGcdBody, brainGameGcdRule);
