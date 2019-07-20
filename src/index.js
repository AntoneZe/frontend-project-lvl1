import readlineSync from 'readline-sync';

/////////////////////////////////////////////Global/////////////////////////////////////////////////////
 export const questionName = () => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log('Hi ' + userName + '!');
  return userName;
};

export const randomInteger = (min,max) => {
	var rand = min - 0.5 + Math.random()*(max - min + 1);
	rand = Math.round(rand);
	return rand;
};



/////////////////////////////////////////////brain-even////////////////////////////////////////////////////

export const brainEven = () => {
  const userName = questionName();
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

/////////////////////////////////////////////brain-calc/////////////////////////////////////////////////////

export const randomOperators = (funct) => {
switch (funct) {
  case 0:
    return "-";
  case 1:
    return "+";
  case 2:
    return "*";
  default:
    return console.log("Woops");
		}
};

export const result = (numA,numB,randomOperators) => {
	switch (randomOperators) {
	case "+":
	return numA + numB;
	case "-":
	return numA - numB;
	case "*":
	return numA * numB;
	}
};

export const brainCalc = () => {
  const userName = questionName();
  console.log("What is the result of the expression?");
  const iter = (counter) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
  const thisGameOperator = randomOperators(randomInteger(0,2));
  const numberA = randomInteger(0,100);
	const numberB = randomInteger(0,100);
  const thisRaund =  `${numberA} ${thisGameOperator} ${numberB}`;
  const result = result(numberA,numberB,thisGameOperator);
  console.log(`Question: ${thisRaund}?`);
  const answer = readlineSync.question('Your answer:');
		if(answer == result) {
		console.log('Correct!')
		return iter(counter+1);
		}
		else return console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`);
		}
		return iter(0);
};


/////////////////////////////////////////////brain-gcd/////////////////////////////////////////////////////

const gcd = (x,y) => {
  if (x !== 0) {
    return gcd(y%x,x);
  } else {
    return y;
  }
};

export const brainGcd = () =>{
 const userName = questionName();
 console.log("Find the greatest common divisor of given numbers.");
 const iter = (counter) => {
   if (counter === 3) {
     return console.log(`Congratulations, ${userName}!`);
   }
 const numberA = randomInteger(0,100);
 const numberB = randomInteger(0,100);
 const result = gcd(numberA,numberB);
 console.log(`Question: ${numberA} ${numberB}`);
 const answer = readlineSync.question('Your answer:');
   if (answer == result) {
   console.log('Correct!');
   return iter(counter+1);
   }
   else return console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`);
   }
   return iter(0);
};



/////////////////////////////////////////////brain-Progression/////////////////////////////////////////////////////


export const brainProgression = () =>{
 const userName = questionName();
 console.log("What number is missing in the progression?");
 const iter = (counter) => {
   if (counter === 3) {
     return console.log(`Congratulations, ${userName}!`);
   }
   const progression = () => {
      const numberC = randomInteger(0,9);
      const massivGen = () => {
        const numberA = randomInteger(1,100);
        const numberB = randomInteger(1,10);
        var numberD = numberA;
        var arr = [numberA];
        for(var i = 0; i <= 8; i++) {
          numberD += numberB;
          arr.push(numberD);
        }
        return arr;
      };
      const raundArray = massivGen();
      const result = raundArray[numberC];
      raundArray[numberC] = "..";
console.log(`Question: ${raundArray.join(" ")}`);
const answer = readlineSync.question('Your answer:');
if (answer == result) {
  return true;
} else {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. \nLet's try again, ${userName}!`);
  return false;
  }
};
   if (progression()) {
   console.log('Correct!');
   return iter(counter+1);
   }
   }
   return iter(0);
};

/////////////////////////////////////////////brain-prime/////////////////////////////////////////////////////

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
};

export const brainPrime = () =>{
 const userName = questionName();
 console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
 const iter = (counter) => {
   if (counter === 3) {
     return console.log(`Congratulations, ${userName}!`);
   }
   const primeCheck = () => {
     const numberA = randomInteger(1,100);
     console.log(`Question: ${numberA}`);
     const answer = readlineSync.question('Your answer:');
      if ((isPrime(numberA) && answer === 'yes') || (!isPrime(numberA) && answer === 'no')) {
        return true;
      }
        const truAnswer = isPrime(numberA) ? "yes" : "no";
        console.log(`${answer} is wrong answer ;(. Correct answer was ${truAnswer}.\nLet's try again, ${userName}!`);
        return false;
   };
   if (primeCheck()) {
   console.log('Correct!');
   return iter(counter+1);
   }
   }
   return iter(0);
};
