import { cons } from '@hexlet/pairs';
import generateRandomNumber from '../utility';
import gameEngine from '../gameEngine';

const progressionLength = 10;

const getProgressionData = () => {
  const start = generateRandomNumber(0, 100);
  const diff = generateRandomNumber(1, 10);
  const missingElementIndex = generateRandomNumber(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i <= progressionLength; i += 1) {
    question = (i === missingElementIndex ? `${question} ..` : `${question} ${start + diff * i}`);
  }
  const correctAnswer = (start + diff * missingElementIndex).toString();
  return cons(question.trim(), correctAnswer);
};

const progressionTask = 'What number is missing in the progression?';

export default () => gameEngine(getProgressionData, progressionTask);
