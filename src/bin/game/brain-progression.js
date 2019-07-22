#!/usr/bin/env node
import {rule} from '../../utility.js';
import {gameEngine} from '../../gameEngine.js';
import {brainProgression} from '../brain-progression.js';

const thisRule = rule("What number is missing in the progression?");

gameEngine(thisRule,brainProgression);
