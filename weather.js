#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
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
  }
  // Show weather
};

initCLI();
