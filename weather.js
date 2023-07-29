#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, API_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    return printError('Token not transferred!');
  }
  try {
    await saveKeyValue(API_DICTIONARY.token, token);
    printSuccess('Token saved!');
  } catch (err) {
    printError(err.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  // console.log(args);
  if (args.h) {
    // Show help
    printHelp();
  }
  if (args.s) {
    // Save citys
    console.log(args.s);
  }
  if (args.t) {
    // Save token
    return saveToken(args.t);
  }
  // Show weather
	getWeather('yerevan')
};

initCLI();
