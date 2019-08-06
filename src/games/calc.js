import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const operators = '+-*';
const minOperatorsIndex = 0;
const maxOperatorsIndex = 2;

const getCalcData = () => {
  const firstValue = generateRandomNumber(1, 100);
  const secondValue = generateRandomNumber(1, 100);
  let correctAnswer;
  const raundOperator = operators[generateRandomNumber(minOperatorsIndex, maxOperatorsIndex)];
  switch (raundOperator) {
    case '+':
      correctAnswer = firstValue + secondValue;
      break;
    case '-':
      correctAnswer = firstValue - secondValue;
      break;
    case '*':
      correctAnswer = firstValue * secondValue;
      break;
    default:
      break;
  }
  const question = `${firstValue} ${raundOperator} ${secondValue}`;
  return cons(question, String(correctAnswer));
};

const calcTask = 'What is the result of the expression?';

export default () => gameEngine(getCalcData, calcTask);
