#!/usr/bin/env node
import {rule} from '../../utility.js';
import {gameEngine} from '../../gameEngine.js';
import {brainEven} from '../brain-even.js';

const thisRule = rule("Answer \"yes\" if number even otherwise answer \"no\".");

gameEngine(thisRule,brainEven);
