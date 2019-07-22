#!/usr/bin/env node
import {rule} from '../../utility.js';
import {gameEngine} from '../../gameEngine.js';
import {brainPrime} from '../brain-prime.js';

const thisRule = rule("Answer \"yes\" if given number is prime. Otherwise answer \"no\"");

gameEngine(thisRule,brainPrime);
