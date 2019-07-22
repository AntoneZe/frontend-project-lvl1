#!/usr/bin/env node
import {rule} from '../../utility.js';
import {gameEngine} from '../../gameEngine.js';
import {brainCalc} from '../brain-calc.js';

const thisRule = rule("What is the result of the expression?");

gameEngine(thisRule,brainCalc);
