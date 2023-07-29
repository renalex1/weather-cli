#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, getKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token);
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
    console.log('shhhh');
  }
  if (args.t) {
    // Save token
    return saveToken(args.t);
  }
  // Show weather
};

initCLI();
