import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const operators = '+-*';

const getCalcData = () => {
  const firstValue = generateRandomNumber(1, 100);
  const secondValue = generateRandomNumber(1, 100);
  let correctAnswer;
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  switch (operator) {
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
  const question = `${firstValue} ${operator} ${secondValue}`;
  return cons(question, String(correctAnswer));
};

const calcTask = 'What is the result of the expression?';

export default () => gameEngine(getCalcData, calcTask);
