#!/usr/bin/env node
import {rule} from '../../utility.js';
import {gameEngine} from '../../gameEngine.js';
import {brainGcd} from '../brain-gcd.js';
const thisRule = rule("Find the greatest common divisor of given numbers.");

gameEngine(thisRule,brainGcd);
