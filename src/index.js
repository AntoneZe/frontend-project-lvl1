import readlineSync from 'readline-sync';

 export const questionName = () => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log('Hi ' + userName + '!');
};

export const randomInteger = (min,max) => {
	var rand = min - 0.5 + Math.random()*(max - min + 1);
	rand = Math.round(rand);
	return rand;
};

export const gameOne = () => {
  console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log('Hi ' + userName + '!');
  console.log("Answer \"yes\" if number even otherwise answer \"no\".");
  const iter = (counter) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
	const randomNum = randomInteger(0,999);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer:');
  const tryAnswer = randomNum%2 !== 0? "no":"yes";
	if (((randomNum%2 === 0) && (answer === "yes")) || ((randomNum%2 !== 0) && ((answer === "no")))) {
		console.log("correct");
    return iter(counter + 1)
  }
	else return console.log(`${answer} is wrong answer ;(. Correct answer was ${tryAnswer}. \nLet's try again, ${userName}!`);
  };
return iter(0)
};
