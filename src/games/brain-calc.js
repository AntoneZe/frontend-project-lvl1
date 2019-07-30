import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';


const brainGameCalcBody = () => {
  const firstCalcNum = generateRandomNumber(1, 100);
  const secondCalcNum = generateRandomNumber(1, 100);
  const randomOperator = '+-*';
  let dataForQuestion;
  let correctAnswer;
  switch (randomOperator[generateRandomNumber(0, 2)]) {
    case '+':
      dataForQuestion = `${firstCalcNum} + ${secondCalcNum}`;
      correctAnswer = firstCalcNum + secondCalcNum;
      break;
    case '-':
      dataForQuestion = `${firstCalcNum} - ${secondCalcNum}`;
      correctAnswer = firstCalcNum - secondCalcNum;
      break;
    case '*':
      dataForQuestion = `${firstCalcNum} * ${secondCalcNum}`;
      correctAnswer = firstCalcNum * secondCalcNum;
      break;
    default:
      break;
  }
  return cons(dataForQuestion, correctAnswer);
};

const brainGameCalcRule = 'What is the result of the expression?';

export default () => gameEngine(brainGameCalcBody, brainGameCalcRule);
