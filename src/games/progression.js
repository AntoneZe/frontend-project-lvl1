import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const progressionLength = 10;

const getProgressionData = () => {
  const start = generateRandomNumber(0, 100);
  const diff = generateRandomNumber(1, 10);
  const missingIndex = generateRandomNumber(1, progressionLength);
  let question = '';
  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === missingIndex) {
      question = `${question} ..`;
    } else {
      question = `${question} ${start + diff * i}`;
    }
  }
  const correctAnswer = (start + diff * missingIndex).toString();
  return cons(question.trim(), correctAnswer);
};

const progressionTask = 'What number is missing in the progression?';

export default () => gameEngine(getProgressionData, progressionTask);
